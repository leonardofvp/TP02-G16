import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    console.log("CLICK");
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className={styles.contenedorApp}>
      <Sidebar menuAbierto={menuAbierto} />
      <div className={styles.contenedorMain}>
        <Header toggleMenu={toggleMenu} menuAbierto={menuAbierto} />

        <main className={styles.contenedorContenido}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
