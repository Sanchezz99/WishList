import styles from './WishList.module.scss' 
import SearchWishList from '@/features/search-wishlist'
import { WishListView } from '@/entities/wishlist'
import WishListInfo from '@/features/stats'
import AddWishList from '@/features/add-wishlist'

const WishList = () => {
    
    return (
        <div className={styles.wishlist}>
            <h1 className={styles.title}>Виш лист фильмов и сериалов</h1>
            <SearchWishList></SearchWishList>
            <AddWishList></AddWishList>
            <WishListInfo></WishListInfo>
            <WishListView></WishListView>
        </div>
    )
}

export default WishList