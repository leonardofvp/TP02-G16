import React from "react";
import styles from "./Sidebar.module.css";
import logoEquipo from "../../../assets/img/logo-equipo.png";
import BotonEnlace from "../../ui/botones/BotonEnlace";

function Sidebar({ menuAbierto, toggleMenu }) {
  const clasesSidebar = `${styles.sidebar} ${menuAbierto ? styles.activo : ""}`;

  return (
    <div className={clasesSidebar}>
      <img
        src={logoEquipo}
        alt="Logo del equipo orión"
        className={styles.logoEquipo}
      />
      <ul>
        <li>
          <BotonEnlace destino="/" texto="Home" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/bitacora" texto="Bitacora" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/metodologias" texto="Metodologias" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/arbol" texto="Árbol" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/proyectos" texto="Proyectos" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/api" texto="Consumo de API" onClick={toggleMenu} />
        </li>
        <li>
          <BotonEnlace destino="/galeria" texto="Galeria" onClick={toggleMenu} />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;