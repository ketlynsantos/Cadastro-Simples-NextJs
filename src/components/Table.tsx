import styles from '../styles/Table.module.css'
import Client from "../core/Client"
import { IconEdition, IconTrash } from './Icons'


interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Ações</th>
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} style={{backgroundColor: `${i % 2 === 0 ? 'gray' : 'white'}`}}>
                    <td>{ client.id }</td>
                    <td>{ client.name }</td>
                    <td>{ client.age }</td>
                    <td>{ client.email }</td>
                    {renderActions(client)}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td style={{display: 'flex'}}>
                <button className={styles.btnEdition}>{ IconEdition }</button>
                <button className={styles.iconTrash}>{ IconTrash }</button>
            </td>
        )
    }

    return(
        <table className={styles.table}>
            <thead>{ renderHeader() }</thead>
            <tbody>{ renderData() }</tbody>
        </table>
    ) 
}