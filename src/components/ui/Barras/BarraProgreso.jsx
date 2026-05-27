import React from "react";
import styles from "./BarraProgreso.module.css";

function BarraProgreso({ nivel }) {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.encabezadoBarra}>
        <span className={styles.etiqueta}>
          {" "}
          <strong>Nivel:</strong>
        </span>
        <span className={styles.porcentaje}> {nivel}%</span>
      </div>
      <div className={styles.contenedorBarra}>
        <div
          className={styles.rellenoBarra}
          style={{ "--progreso": `${nivel}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BarraProgreso;
