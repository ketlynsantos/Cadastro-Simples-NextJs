import styles from '../styles/Input.module.css'

interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    onlyReading?: boolean
    onChange?: (value: any) => void

}

export default function Input(props: InputProps) {
    return(
        <div className={styles.containerInput}>
            <input className={styles.input} type={props.type ?? 'text'} value={props.value} readOnly={props.onlyReading} 
                placeholder={ props.text }  onChange={e => props.onChange?.(e.target.value)}/>
            <span className={styles.borderFocus}></span>
        </div>
    )
}