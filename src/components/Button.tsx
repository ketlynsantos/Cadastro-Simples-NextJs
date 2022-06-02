import styles from '../styles/Button.module.css'

interface ButtonProps {
    className?: string 
    children: any
}

export default function Button(props: ButtonProps) {

    return (
        <button 
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