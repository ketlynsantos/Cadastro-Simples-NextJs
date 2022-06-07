import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'
import styles from '../styles/Index.module.css'

export default function Home() {

  const { 
    client, 
    clients, 
    selectClient, 
    deleteClient, 
    saveClient, 
    newClient, 
    visibleTable, 
    showTable,
  } = useClients()

  return (
    <div className={styles.index}>
      <Layout title="Cadastro de Clientes" onClick={newClient} visibleTable={visibleTable}>
        {visibleTable ? (
            <Table clients={clients} selectClient={selectClient} deleteClient={deleteClient}></Table>
        ): (
          <Form client={client} changeClient={saveClient} cancel={showTable}/>
        )}
      </Layout>
    </div>
  )
}
