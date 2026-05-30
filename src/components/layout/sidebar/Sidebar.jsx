import React from "react";
import styles from "./Sidebar.module.css";
import logoEquipo from "../../../assets/img/logo-equipo.png";
import BotonEnlace from "../../ui/Botones/BotonEnlace";

function Sidebar(props) {
  const clasesSidebar = `${styles.sidebar} ${props.menuAbierto ? styles.activo : ""}`;
  return (
    <div className={clasesSidebar}>
      <img
        src={logoEquipo}
        alt="Logo del equipo orión"
        className={styles.logoEquipo}
      />
      <ul>
        <li>
          <BotonEnlace destino="/" texto="Home" />
        </li>
        <li>
          <BotonEnlace destino="/bitacora" texto="Bitacora" />
        </li>
        <li>
          <BotonEnlace destino="/metodologias" texto="Metodologias" />
        </li>
        <li>
          <BotonEnlace destino="tecnologias" texto="Tecnologias" />
        </li>
        <li>
          <BotonEnlace destino="/proyectos" texto="Proyectos" />
        </li>
        <li>
          <BotonEnlace destino="/api" texto="Consumo de API" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
