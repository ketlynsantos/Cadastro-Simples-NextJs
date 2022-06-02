import styles from '../styles/Button.module.css'

interface ButtonProps {
    className?: string 
    children: any,
    onClick?: () => void
}

export default function Button(props: ButtonProps) {

    return (
        <button onClick={props.onClick}
            className={`
                ${ props.className === 'btn'? styles.btn 
                    : props.className === 'btnUpdate' ? styles.btnUpdate
                    : props.className === 'btnCancel' ? styles.btnCancel
                    : ''
                }
            `}
        >
            { props.children }
        </button>
    )
} 