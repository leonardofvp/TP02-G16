import React from "react";
import TarjetaBasica from "../components/ui/Tarjetas/TarjetaBasica";
import styles from "./Tecnologias.module.css";

function Tecnologias() {
  return (
    <section className={styles.seccionTecnologias}>
      <h2>Stack Tecnológico</h2>
      <p>
        El desarrollo de este proyecto se basa en una arquitectura moderna
        centrada en componentes y reactividad:
      </p>

      <div className={styles.contenedorTecnologias}>
        <TarjetaBasica
          titulo="Ecosistema React"
          descripcion="Construcción de interfaces modulares basadas en componentes funcionales, manejo de estado (Hooks) y renderizado eficiente con Vite."
        />

        <TarjetaBasica
          titulo="Diseño y Estilos"
          descripcion="Implementación de interfaces responsivas utilizando CSS Modules para el encapsulamiento de estilos y CSS Flexbox/Grid para layouts avanzados."
        />

        <TarjetaBasica
          titulo="Desarrollo y Despliegue"
          descripcion="Gestión de versiones con Git/GitHub y despliegue automatizado en Vercel, optimizando la experiencia de usuario y el rendimiento del sitio."
        />
      </div>
    </section>
  );
}

export default Tecnologias;
