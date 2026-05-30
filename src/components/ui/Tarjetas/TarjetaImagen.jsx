import React from "react";
import styles from "./TarjetaImagen.module.css";

function TarjetaImagen({ titulo, srcImagen, altImagen, texto, children }) {
  return (
    <article className={styles.tarjetaImagen}>
      <div className={styles.contenedorTexto}>
        {titulo && <h3>{titulo}</h3>}

        <div className={styles.detalleTarjeta}>
          {texto && <p className= {styles.descripcionTextual}>{texto}</p>}

          <div className={styles.contenedorChildren}>{children}</div>
        </div>
      </div>

      <div className={styles.contenedorImagen}>
        <img src={srcImagen} alt={altImagen} className={styles.imagenTarjeta} />
      </div>
    </article>
  );
}

export default TarjetaImagen;
