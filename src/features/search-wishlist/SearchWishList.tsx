import { useContext } from 'react'
import styles from './SearchWishList.module.scss' 
import Field from '@/shared/ui/Field'
import { WishListContext } from '@/entities/wishlist'

const SearchWishList = () => {

    const {
        searchQuerry,
        setSearchQuerry
    } = useContext(WishListContext)

    const onSubmit = (event: React.SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault()
    }

    const onInput = (event: React.InputEvent<HTMLInputElement>): void => {
        setSearchQuerry(event.currentTarget.value)
    }

    return (
        <form 
            className={styles.form} 
            onSubmit={onSubmit}
        >
        <Field
            id='search-wishlist' 
            type='search'
            placeholder='Поисковая строка'  
            value={searchQuerry}
            onInput={onInput}
        >
        </Field>
        
        </form>
    )
}

export default SearchWishList