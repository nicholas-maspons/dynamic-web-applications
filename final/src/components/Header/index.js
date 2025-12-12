import {NavLink} from 'react-router-dom' 

import styles from './Header.module.scss'

function Header (props) {

    const {name, pages} = props

    return (
        <header className={styles.header}>
            <h1 className={styles.brand}>{name}</h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {pages.map((page, index) => {
                        return <li key={index}><NavLink to={page.path} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>{page.name}</NavLink></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header; 
