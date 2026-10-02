import styles from './Field.module.scss' 

type WishListField = {
    className?: string
    id: string
    type: 'text' | 'search'
    placeholder: string
    value: string
    onInput: (event: React.InputEvent<HTMLInputElement>) => void
    error?: string
}

const Field = (props: WishListField) => {

    const {
        className,
        id,
        type = 'text',
        placeholder,
        value,
        onInput,
        error
    } = props

    return (
        <div className={`${styles.field} ${className}`}>
            <input 
                className={styles.input} 
                id={id} 
                type={type}
                placeholder={placeholder}
                value={value} 
                onInput={onInput}
                >
            </input>
            { error && (
                <span className={styles.error}>{error}</span>
            )}
            <label 
                className={styles.label} 
                htmlFor={id}>
            </label>
        </div>
    )
}

export default Field