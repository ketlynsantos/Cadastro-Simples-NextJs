import styles from '../styles/Layout.module.css'
import Title from './Title'

interface LayoutProps {
    title?: string,
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Title>{ props.title }</Title>
            <hr />
            <div className={styles.children}>{ props.children }</div>
        </div>
    )
}