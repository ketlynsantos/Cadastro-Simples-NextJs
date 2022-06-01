import styles from '../styles/Button.module.css'

interface ButtonProps {
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    return (
        <button className={styles.btn}>{ props.children }</button>
    )
} 