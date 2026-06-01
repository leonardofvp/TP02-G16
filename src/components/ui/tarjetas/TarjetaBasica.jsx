import React from "react";
import styles from "./TarjetaBasica.module.css";

const TarjetaBasica = ({ titulo, descripcion, elementoGrafico, children }) => {
  return (
    <article className={styles.tarjetaItem}>
      <div className={styles.columnaContenido}>

        {titulo ? (
          <>
            <h3>{titulo}</h3>
            <div className={styles.detalleTarjeta}>
              {descripcion && <p>{descripcion}</p>}
              <div className={styles.contenedorChildren}>{children}</div>
            </div>
          </>
        ) : (
          <div className={styles.contenedorChildren}>{children}</div>
        )}
      </div>

      {elementoGrafico && (
        <div className={styles.columnaGrafica}>
          {elementoGrafico}
        </div>
      )}
    </article>
  );
};

export default TarjetaBasica;