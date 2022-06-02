import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Index.module.css'

export default function Home() {

  const clients = [
    new Client('Ana', 34, 'Ana@gmail', '1'),
    new Client('Pedro', 18, 'pedor@gmail', '2'),
    new Client('Lucas', 20, 'Lucas@gmail', '3'),
    new Client('Daniel', 19, 'Daniel@gmail', '4'),
  ]

  //Selecionar um cliente
  function selectClient(client: Client) {
    console.log(client.name)
  }

  //Quando um cliente for excluido
  function deleteClient(client: Client) {
    console.log(`Excluir: ${client.name} `)
  }

  return (
    <div className={styles.index}>
      <Layout title="Cadastro Simples">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button className="btn">Novo Cliente</Button>
        </div>
        {/* <Table clients={clients} selectClient={selectClient} deleteClient={deleteClient}></Table> */}
        <Form client={clients[0]}/>
      </Layout>
      
    </div>
  )
}
