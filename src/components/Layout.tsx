import styles from '../styles/Layout.module.css'
import Title from './Title'
import Button from './Button'
import { IconUserAdd } from './Icons'

interface LayoutProps {
    title?: string,
    onClick: () => void,
    visibleTable: boolean,
    children: any,
}

export default function Layout(props: LayoutProps) {

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Title>{ props.title }</Title>
                { props.visibleTable ? 
                    <Button className="btn" onClick={props.onClick}>
                        <div style={{marginRight: '10px'}}>{ IconUserAdd }</div> 
                        Novo Cliente
                    </Button>
                : ""}
            </div>
            <hr />
            <div className={styles.children}>{ props.children }</div>
        </div>
    )
}