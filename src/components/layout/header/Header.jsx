import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <h1>Equipo Orión</h1>
        </div>
    )
}

export default Header