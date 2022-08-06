import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1655635643617-72e0b62b9278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
                alt="" 
            />

            <div className={styles.profile} >
                <Avatar hasBorder  src="http://github.com/wilsonmdrs.png"/>

                <strong>Wilson Medeiros</strong>
                <span>Computer Scientist</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={"20"} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}