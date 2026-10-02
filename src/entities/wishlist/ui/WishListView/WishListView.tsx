import { WishListContext, WishListItem } from '@/entities/wishlist'
import styles from './WishListView.module.scss'

import { useContext } from 'react'
import type { ItemType } from '../../model/types'
const WishListView = () => {

    const {
        items,
        filteredItems
    } = useContext(WishListContext)

    const isEmptyItems = items.length === 0
    const isEmptyFilteredItems = filteredItems.length === 0

    if (isEmptyItems) return (
        <div className={styles.isEmpty}>Фильмов на просмотр нету</div>
    ) 

    if (isEmptyFilteredItems) return (
        <div className={styles.isEmpty}>Фильм не найден</div>
    ) 
    const displayItems = filteredItems.length > 0 ? filteredItems : items

    return (
        <div className={styles.view}>
            {displayItems.map((item: ItemType) => (
                <WishListItem
                key={item.id}
                {...item}
                >
                </WishListItem>
            ))}
        </div>
    )
}

export default WishListView