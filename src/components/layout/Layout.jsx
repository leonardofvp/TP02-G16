import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className={styles.contenedorApp}>
      <Sidebar menuAbierto={menuAbierto} />
      <div className={styles.contenedorMain}>
        <Header toggleMenu={toggleMenu} menuAbierto={menuAbierto} />

        <main
          key={location.pathname}
          className={`${styles.contenedorContenido} ${styles.animacionEntrada}`}
        >
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
