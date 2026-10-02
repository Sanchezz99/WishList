import { WishListContext } from "@/entities/wishlist"
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"
import styles from "./AddWishList.module.css"
import { useContext, useState } from "react"

const AddWishList = () => {
    const {
        itemTitle,
        setItemTitle,
        itemAdditionally,
        setItemAdditionally,
        addItem
    } = useContext(WishListContext)

    const clearInputTitle = itemTitle.trim()
    const isEmptyTitle = clearInputTitle.length === 0
    const clearInputAdditionally = itemAdditionally.trim()

    const [titleError, setTitleError] = useState('')
    const [additionallyError, setAdditionallyError] = useState('')

    const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!isEmptyTitle) {
            addItem(clearInputTitle, clearInputAdditionally)
        }
    }

    const onInputTitle = (event: React.InputEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget
        const clearValue = value.trim()
        const onlySpaces = value.length > 0 && clearValue.length === 0
        setItemTitle(value)
        setTitleError( onlySpaces ? 'Поле не должно быть пустым' : '')
    }

    const onInputAdditionally = (event: React.InputEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget
        const clearValue = value.trim()
        const onlySpaces = value.length > 0 && clearValue.length === 0
        setItemAdditionally(value)
        setAdditionallyError( onlySpaces ? 'Поле не должно быть пустым' : '')
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Field
                id="add-wishlist-title"
                type="text"
                placeholder="Введите название фильма или сериала"
                value={itemTitle}
                onInput={onInputTitle}
                error={titleError}
            >
            </Field>
            <Field
                id="add-wishlist-additionally"
                type="text"
                placeholder="Введите доп. информацию"
                value={itemAdditionally}
                onInput={onInputAdditionally}
                error={additionallyError}
            >
            </Field>
            <Button
                type="submit"
                children="Добавить"
                isDisabled={isEmptyTitle}
            >
            </Button>
        </form>
    )
}

export default AddWishList