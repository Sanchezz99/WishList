import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./ItemDetailsPage.module.scss"
import { WishListContext } from "@/entities/wishlist"

const ItemDetailsPage = () => {
    const { id } = useParams<{id: string}>()
    const { items } = useContext(WishListContext)

    const item = items.find((item) => item.id === id)
    
    return (
        <div className={styles.wishlist_details}>
            <h1 className={styles.title}>Полная информация</h1>
            <p className={styles.border}>{`Название🎬: ${item?.title}`}</p>
            <p className={styles.border}>{`Состояние🍿: ${ item?.isDone ? 'Просмотрено' : 'Не просмотрено'}`}</p>
            <p className={styles.border}>Доп. информация🎥: {item?.additionally || "отсутствует"}</p>
            <div className={styles.button}>
                <Link to="/">Вернуться на главный экран</Link>
            </div>
        </div>
    )
}

export default ItemDetailsPage