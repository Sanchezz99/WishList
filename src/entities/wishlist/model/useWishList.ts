import { useCallback, useEffect, useReducer, useState, useMemo } from "react"
import itemsAPI from '@/shared/api/items/index'
import type { ItemType, ItemAction, WishListState } from "./types"

type useWishListTypeReturn = WishListState

const useWishList = (): useWishListTypeReturn => {
    const WishListReducer = (state: ItemType[], action: ItemAction) => {
        switch(action.type) {
            case 'SET_ALL': {
                return Array.isArray(action.items) ? action.items : state
            }
            case 'ADD': {
                return [...state, action.item]
            }
            case 'DELETE': {
                return state.filter((item) => item.id !== action.id)
            }
            case 'DELETE_ALL': {
                return []
            }
            case 'TOGGLE': {
                const { id, isDone } = action
                return state.map((item) => item.id === id ? {...item, isDone}: item)
            }
            default: {
                return state
            }
        }
    }

    const [items, dispatch] = useReducer(WishListReducer, [])
    const [searchQuerry, setSearchQuerry] = useState('')
    const [itemTitle, setItemTitle] = useState('')
    const [itemAdditionally, setItemAdditionally] = useState('')

    useEffect(() => {
        itemsAPI.getAll().then((serverItems) => {
            dispatch({type: 'SET_ALL', items: serverItems})
        })
    }, [])

    const toggleItem = useCallback((id: string, isDone: boolean) => {
        itemsAPI.toggleItem(id, isDone).then(() => {
            dispatch({type: 'TOGGLE', id: id, isDone: isDone})
        })
    }, [])

    const deleteItem = useCallback((id: string) => {
        itemsAPI.deleteItem(id).then(() => {
            dispatch({type: 'DELETE', id: id})
        })
    }, [])

    const filteredItems = useMemo(() => items.filter((item) => {
        const clearSearchQuerry = searchQuerry.trim().toLowerCase()
        return item.title.toLowerCase().includes(clearSearchQuerry)
    }), [items, searchQuerry])

    const deleteAll = useCallback(() => {
        const isConfirmed = confirm('Вы уверен что хотите удалить всё?')
        if (isConfirmed) {
            itemsAPI.deleteAll(items).then(() => {
                dispatch({type: 'DELETE_ALL'})
            })
        }
    }, [items])

    const addItem = useCallback((title: string, additionally: string) => {
        const newItem = {
            title,
            additionally,
            isDone: false
        }
        itemsAPI.addItem(newItem).then((savedItem) => {
            dispatch({type: 'ADD', item: savedItem})
            setItemTitle('')
            setItemAdditionally('')
        })
    }, [])

    return {
        searchQuerry,
        setSearchQuerry,
        items,
        toggleItem,
        deleteItem,
        filteredItems,
        deleteAll,
        itemTitle,
        setItemTitle,
        itemAdditionally,
        setItemAdditionally,
        addItem
    }
}

export default useWishList