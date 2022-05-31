import Client from "../core/Client"

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
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}>
                    <td>{ client.id }</td>
                    <td>{ client.name }</td>
                    <td>{ client.age }</td>
                    <td>{ client.email }</td>
                </tr>
            )
        })
    }

    return(
        <table>
            <thead>{ renderHeader() }</thead>
            <tbody>{ renderData() }</tbody>
        </table>
    )
}