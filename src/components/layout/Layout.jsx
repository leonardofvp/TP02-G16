import React from 'react'
import Sidebar from "./sidebar/Sidebar"
import Header from "./header/Header"
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.contenedorApp}>
            <Sidebar/>
            <div className={styles.contenedorMain}>
                <Header/>

                <main className={styles.contenedorContenido}>
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </div>
    )
}

export default Layout