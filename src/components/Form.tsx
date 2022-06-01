import Input from "./Input";
import styles from '../styles/Form.module.css'

interface FormProps {

}

export default function Form(props: FormProps) {
    return(
        <div className={styles.form}>
            <Input text="Nome" value=""/>
        </div>
    )
}