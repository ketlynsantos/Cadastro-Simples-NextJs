import styles from '../styles/Input.module.css'
import '../styles/Input.module.css'
import { MutableRefObject, useEffect, useRef } from 'react'

interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    onlyReading?: boolean
    focus?: boolean
    onChange?: (value: any) => void
 
}

export default function Input(props: InputProps) {

    // const inputName = useRef(null)

    // useEffect(() => {
    //         inputName.current.focus()      
    // }, [])


    return(
        <div className={styles.inputGroup}>
            <label className={props.value ? styles.labelAfterTyping : ''} htmlFor={props.text}>{ props.text }</label>
            <input id={props.text} className={props.value ? styles.inputAfterTyping : styles.input}
                type={props.type ?? 'text'} value={props.value} readOnly={props.onlyReading}
                onChange={e => props.onChange?.(e.target.value)} autoFocus={props.focus}/>
        </div>
    )
}