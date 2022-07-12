import {FaPencilAlt} from 'react-icons/fa';
import { Avatar } from './Avatar';

import styles from './Sibebar.module.css';

export function Sibebar() {
    return (
        <aside className={styles.sibebar}>
            <img className={styles.cover} 
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>

             <Avatar  src="https://avatars.githubusercontent.com/u/96690576?v=4" />

             <strong>Esdras Freitas</strong>
             <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <FaPencilAlt size="20"/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}