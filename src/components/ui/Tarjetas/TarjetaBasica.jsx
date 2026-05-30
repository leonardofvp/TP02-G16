import React from "react";
import styles from "./TarjetaBasica.module.css";

const TarjetaBasica = ({ titulo, descripcion, elementoGrafico, children }) => {
  return (
    <article className={styles.tarjetaItem}>

      {/* Columna Izquierda: Maneja los textos y cualquier children */}
      <div className={styles.columnaContenido}>
        <h3>{titulo}</h3>
        <div className={styles.detalleTarjeta}>
          {descripcion && <p>{descripcion}</p>}
          <div className={styles.contenedorChildren}>
            {children}
          </div>
        </div>
      </div>

      {/* Columna Derecha: Renderiza el avatar o icono si lo recibe */}
      {elementoGrafico && (
        <div className={styles.columnaGrafica}>
          {elementoGrafico}
        </div>
      )}

    </article>
  );
};

export default TarjetaBasica;