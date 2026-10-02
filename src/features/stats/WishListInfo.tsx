import { useContext, useMemo } from 'react'
import styles from './WishListInfo.module.scss'
import { WishListContext } from '@/entities/wishlist'

const WishListView = () => {
    
    const {
        items,
        deleteAll
    } = useContext(WishListContext)

    const total = items.length
    const watched = useMemo(() => items.filter((item) => item.isDone).length, [items])

    return (
        <div className={styles.view}>
            <div>{`Просмотрено ${watched} из ${total}`}</div>
            <button className={styles.deleteAllButton}
                type='button'
                onClick={() => deleteAll()}
            >
                Удалить всё
            </button>
        </div>
    )
}
export default WishListView