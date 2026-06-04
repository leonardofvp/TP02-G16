import React from "react";
import TarjetaBasica from "../components/ui/tarjetas/TarjetaBasica";
import styles from "./Metodologias.module.css";

function Metodologias() {
  return (
    <section className={styles.seccionMetodologias}>
      <h2>Cómo trabajamos</h2>
      <p>En el Equipo Orión combinamos metodologías ágiles con buenas prácticas de programación. Conocé los principios que guían nuestro día a día:</p>
      <div className={styles.contenedorMetodologias}>
        <TarjetaBasica
          titulo="Innovación"
          descripcion="Buscamos soluciones creativas a problemas técnicos complejos."
        />

        <TarjetaBasica
          titulo="Calidad"
          descripcion="Aplicamos buenas prácticas de código y diseño responsivo."
        />

        <TarjetaBasica
          titulo="Sinergia"
          descripcion="Potenciamos nuestras habilidades individuales en cada proyecto grupal."
        />
      </div>
    </section>
  );
}

export default Metodologias;
