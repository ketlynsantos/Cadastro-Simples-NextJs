import styles from '../styles/Table.module.css'
import Client from "../core/Client"
import { IconEdition, IconTrash } from './Icons'


interface TableProps {
    clients: Client[],
    selectClient?: (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.deleteClient || props.selectClient

    //Renderizar cabeçalho
    function renderHeader() {
        return (
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                { showActions ? (<th style={{textAlign: 'center'}}>Ações</th>) : false }
            </tr>
        )
    }

    //Renderizar dados (conteudo)
    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} style={{backgroundColor: `${i % 2 === 0 ? '#60577908' : '#35507014'}`}}>
                    <td>{ client.id }</td>
                    <td>{ client.name }</td>
                    <td>{ client.age }</td>
                    <td>{ client.email }</td>
                    {/* Mostrar a coluna açoes se somente se showActions for true */}
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td style={{display: 'flex', justifyContent: 'center'}}>
                { props.selectClient ? (
                    <button className={styles.btnEdition} 
                        onClick={() => props.selectClient?.(client)}>{ IconEdition }</button>
                ) : false }

                {props.deleteClient ? (
                    <button className={styles.btnTrash}
                        onClick={() => props.deleteClient?.(client)}>{ IconTrash }</button>
                ) : false }
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