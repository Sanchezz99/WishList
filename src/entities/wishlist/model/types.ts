export type ItemType  = {
    id: string
    title: string
    additionally: string
    isDone: boolean
}

export type ItemAction =
  | { type: 'SET_ALL'; items: ItemType[] }
  | { type: 'ADD'; item: ItemType }
  | { type: 'TOGGLE'; id: string; isDone: boolean }
  | { type: 'DELETE'; id: string }
  | { type: 'DELETE_ALL' }

export type WishListState = {
    searchQuerry: string
    setSearchQuerry: (querry: string) => void
    items: ItemType[]
    toggleItem: (id: string, isDone: boolean) => void
    deleteItem: (id: string) => void
    deleteAll: () => void
    filteredItems: ItemType[]
    itemTitle: string
    setItemTitle: (title: string) => void
    itemAdditionally: string
    setItemAdditionally: (additionally: string) => void
    addItem: (title: string, additionally: string) => void
}