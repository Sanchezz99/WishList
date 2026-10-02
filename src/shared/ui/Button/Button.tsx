import styles from './Button.module.scss' 

type ButtonType = {
    className?: string
    type: 'submit' | 'button'
    onClick?: () => void 
    children: React.ReactNode
    isDisabled: boolean
}

const Button = (props: ButtonType) => {

    const {
        className,
        type,
        onClick,
        children,
        isDisabled
    } = props

    return (
        <button 
        className={`${styles.button} ${className}`} 
        type={type} 
        onClick={onClick}
        disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button