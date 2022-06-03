import { useEffect, useState } from 'react'
import ColectionClient from '../backend/db/ColectionClient'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'
import useTableOrForm from './useTableOrForm'

export default function useClients() {

    const repository: ClientRepository = new ColectionClient() 

    // const clients = [
    //   new Client('Ana', 34, 'Ana@gmail', '1'),
    //   new Client('Pedro', 18, 'pedor@gmail', '2'),
    //   new Client('Lucas', 20, 'Lucas@gmail', '3'),
    //   new Client('Daniel', 19, 'Daniel@gmail', '4'),
    // ]
  
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    const {
        visibleTable,
        visibleForm,
        showTable,
        showForm
    } = useTableOrForm()
  
    useEffect(() => { allClients() }, [])
    
    function allClients() {
        repository.allClients().then(clients => {
            setClients(clients)
            showTable()
        })
    }
  
    //Selecionar um cliente
    function selectClient(client: Client) {
        setClient(client)
        showForm()
        // console.log(client.name)
    }
  
    //Salvar alteração
    async function saveClient(client: Client) {
        await repository.save(client)
        allClients()
        // console.log(`Novo Cliente: ${client.name}`)
    }
  
    //Quando um cliente for excluido
    async function deleteClient(client: Client) {
        await repository.delete(client)
        allClients()
        // console.log(`Excluir: ${client.name} `)
    }
  
     //Novo Cliente
     function newClient() {
        setClient(Client.empty())
        showForm()
    }

    return { 
        client,
        clients,
        allClients,
        selectClient,
        saveClient,
        deleteClient,
        newClient,
        visibleTable,
        visibleForm,
        showTable,
        showForm
    }
}