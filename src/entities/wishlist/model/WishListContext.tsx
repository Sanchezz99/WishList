import { createContext } from "react";
import useWishList from "./useWishList";
import type { WishListState } from "./types"

type WishListContextType = WishListState

export const WishListContext = createContext<WishListContextType>({} as WishListContextType)

type WishListProviderType = {
    children: React.ReactNode
}

export const WishListProvider = (props: WishListProviderType) => {
    const { children } = props
    const {
        searchQuerry,
        setSearchQuerry,
        items,
        toggleItem,
        deleteItem,
        deleteAll,
        filteredItems,
        itemTitle,
        setItemTitle,
        itemAdditionally,
        setItemAdditionally,
        addItem
    } = useWishList()


    return (
        <WishListContext.Provider
            value={{
                searchQuerry,
                setSearchQuerry,
                items,
                toggleItem,
                deleteItem,
                deleteAll,
                filteredItems,
                itemTitle,
                setItemTitle,
                itemAdditionally,
                setItemAdditionally,
                addItem              
            }}
        >
            {children}
        </WishListContext.Provider>

    )
}