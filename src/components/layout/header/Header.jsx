import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import BotonHamburguesa from "../../ui/Botones/botonHamburguesa";

function Header(props) {
  return (
    <div className={styles.header}>
      <BotonHamburguesa
        toggleMenu={props.toggleMenu}
        menuAbierto={props.menuAbierto}
      />
      <h1>Equipo Orión</h1>
    </div>
  );
}

export default Header;
