import Layout from '../components/Layout'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.index}>
      <Layout title="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}
