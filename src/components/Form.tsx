import Input from "./Input";
import styles from '../styles/Form.module.css'
import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";

interface FormProps {
    client: Client
}

export default function Form(props: FormProps) {

    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    const [email, setEmail] = useState(props.client?.email ?? '')

    return(
        <div className={styles.form}>
            {/* Caso queira mostrar o id do cliente
             { id ? (
                <Input onlyReading text="Código" value={id}/>
            ): false} */}
            <Input text="Nome" value={name} onChange={setName}/>
            <Input text="Idade" type="number" value={age} onChange={setAge}/>
            <Input text="Email" value={email} onChange={setEmail}/>

            <div className={styles.buttons}>
                <Button className="btnUpdate">Atualizar</Button>
                <Button className="btnCancel">Cancelar</Button>
            </div>
        </div>
    )
}