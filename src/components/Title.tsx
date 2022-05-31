import styles from '../styles/Title.module.css'

export default function Title(props) {
    return(
        <div className={styles.title}>
            <h1>{ props.children }</h1>
        </div>
    )
}