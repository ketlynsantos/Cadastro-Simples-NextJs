import { useEffect, useState } from 'react'
import ColectionClient from '../backend/db/ColectionClient'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'
import styles from '../styles/Index.module.css'

export default function Home() {

  const repository: ClientRepository = new ColectionClient() 

  // const clients = [
  //   new Client('Ana', 34, 'Ana@gmail', '1'),
  //   new Client('Pedro', 18, 'pedor@gmail', '2'),
  //   new Client('Lucas', 20, 'Lucas@gmail', '3'),
  //   new Client('Daniel', 19, 'Daniel@gmail', '4'),
  // ]

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  //Entre <> - 2 possiveis estados. Inicialmente começará sendo table
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(() => { allClients() }, [])
  
  function allClients() {
    repository.allClients().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  //Selecionar um cliente
  function selectClient(client: Client) {
    setClient(client)
    setVisible('form')
    console.log(client.name)
  }

  //Salvar alteração
  async function saveClient(client: Client) {
    await repository.save(client)
    allClients()
    // console.log(`Novo Cliente: ${client.name}`)
  }

  //Quando um cliente for excluido
  function deleteClient(client: Client) {
    console.log(`Excluir: ${client.name} `)
  }

   //Novo Cliente
   function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }


  return (
    <div className={styles.index}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className={styles.buttons}>
              <Button className="btn" onClick={newClient}>Novo Cliente</Button>
            </div>
            <Table clients={clients} selectClient={selectClient} deleteClient={deleteClient}></Table>
          </>
        ): (
          <Form client={client} changeClient={saveClient} cancel={() => setVisible('table')}/>
        )}
      </Layout>
    </div>
  )
}
