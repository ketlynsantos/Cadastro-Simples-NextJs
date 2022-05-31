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

  return (
    <div className={styles.index}>
      <Layout title="Cadastro Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
