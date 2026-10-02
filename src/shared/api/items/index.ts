const URL = 'http://localhost:3001/wishLists'

const headers = {
    'Content-Type': 'application/json'
}

type ItemType = {
    id: string
    title: string
    isDone: boolean
}

type NewItemType = Omit<ItemType, 'id'>

const itemsAPI = {
    getAll: () => {
        return fetch(URL)
        .then((response) => response.json())
    },
    addItem: (newItem: NewItemType) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(newItem)
        }).then((response) => response.json())
    },
    deleteItem: (id: string) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })
    },
    deleteAll: (items: ItemType[]) => {
        return Promise.all(
            items.map(({id}) => itemsAPI.deleteItem(id))
        )
    },
    toggleItem: (id: string, isDone: boolean) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({isDone})
        })
    }
}

export default itemsAPI