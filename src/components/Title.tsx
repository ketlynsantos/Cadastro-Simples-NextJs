import styles from '../styles/Title.module.css'

export default function Title(props) {
    return(
        <h1 className={styles.title}>{ props.children }</h1>
    )
}