import styles from '../styles/Input.module.css'

interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    onlyReading?: boolean

}

export default function Input(props: InputProps) {
    return(
        <div className={styles.containerInput}>
            <input className={styles.input} type={props.type ?? 'text'} value={props.value} 
            readOnly={props.onlyReading} placeholder={ props.text }/>
            {/* <label htmlFor="">{ props.text }</label> */}
            <span className={styles.borderFocus}></span>
        </div>
    )
}