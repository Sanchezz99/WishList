import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './WishListItem.module.scss' 
import { WishListContext }  from '@/entities/wishlist'

type WishListItemType = {
    id: string
    title: string
    isDone: boolean
}

const WishListItem = (props: WishListItemType) => {
    
    const {
        id,
        title,
        isDone,
    } = props

    const {
        deleteItem,
        toggleItem
    } = useContext(WishListContext)


    return (
        <div className={styles.item}>
            <input 
                type='checkbox' 
                id={id}
                checked={isDone}
                onChange={() => toggleItem(id, !isDone)}
                >
            </input>
            <label 
                htmlFor={id}
            >
                {title}
            </label>
            <div className={styles.buttons}>
                <Link
                    to={`/item/${id}`}
                    className={styles.moreButton}
                >🛈</Link>
                <button 
                    className={styles.deleteButton}
                    onClick={() => deleteItem(id)}
                >✖</button>
            </div>
        </div>
    )
}

export default WishListItem