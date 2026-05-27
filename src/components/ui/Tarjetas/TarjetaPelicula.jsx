import React, { useState } from "react";
import BotonExpandir from "../Botones/BotonExpandir";
import styles from "./TarjetaPelicula.module.css";

function TarjetaPelicula({ titulo, imagen, sinopsis }) {
  const [expandido, setExpandido] = useState(false);

  const expandir = () => {
    setExpandido(!expandido);
  };

  return (
    <article class={styles.tarjetaItem}>
      <h3>{titulo}</h3>
      <div
        className={`${styles.detalleTarjeta} ${expandido ? styles.activa : ""}`}
      >
        <div class={styles.contenedorImagenPelicula}>
          <img src={imagen} alt={titulo} />
        </div>
        <p>{sinopsis}</p>
      </div>
      <BotonExpandir expandido={expandido} onClick={expandir} />
    </article>
  );
}

export default TarjetaPelicula;
