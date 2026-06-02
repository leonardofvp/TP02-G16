import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import BotonHamburguesa from "../../ui/botones/BotonHamburguesa";
import { FaGithub } from "react-icons/fa";

function Header({ toggleMenu, menuAbierto }) {
  const location = useLocation();

  const nombresRutas = {
    "/": "Home",
    "/bitacora": "Bitácora",
    "/metodologias": "Metodologías",
    "/arbol": "Árbol de renderizado",
    "/proyectos": "Proyectos",
    "/api": "Consumo de API",
    "/galeria": "Galeria",
  };

  let nombreSeccion = nombresRutas[location.pathname] || "";

  if (!nombreSeccion && location.pathname.startsWith("/perfil/")) {
    const partesUrl = location.pathname.split("/");
    const nombreUsuario = partesUrl[2];

    if (nombreUsuario) {
      const nombreFormateado =
        nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
      nombreSeccion = `Perfil de ${nombreFormateado}`;
    } else {
      nombreSeccion = "Perfil";
    }
  }

  return (
    <div className={styles.header}>
      <BotonHamburguesa toggleMenu={toggleMenu} menuAbierto={menuAbierto} />
      <div className={styles.titulos}>
        <h1>Equipo Orión</h1>

        {/* Nuevo contenedor que agrupa el texto y el ícono */}
        <div className={styles.grupoSeccion}>
          {nombreSeccion && (
            <>
              <span className={styles.separador}>|</span>
              <span className={styles.subtituloRuta}>{nombreSeccion}</span>
            </>
          )}

          <a
            href="https://github.com/leonardofvp/TP02-G16"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.enlaceGithub}
            aria-label="Ver código fuente en GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
