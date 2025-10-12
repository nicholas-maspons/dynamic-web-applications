import {NavLink} from 'react-router-dom' 

import styles from './Header.module.scss'

function Header (props) {

    const {name, pages} = props

    return (
        <header className={styles.header}>
            <h1 className={styles.brand}>{name}</h1>
            {/* map bc this is meant to be dynamic */}
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {/* {pages.map((page) => {
                        return <li><NavLink/></li>
                    })} */}
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>Stats</li>
                    <li className={styles.li}>Settings</li>
                </ul>
            </nav>
            {/* <nav>
                <li><NavLink/></li>
            </nav> */}
        </header>
    )
}

export default Header; 
