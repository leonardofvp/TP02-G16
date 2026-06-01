import React, { useState } from "react";
import BotonExpandir from "../botones/BotonBasico";
import styles from "./TarjetaPelicula.module.css";

function TarjetaPelicula({ titulo, imagen, sinopsis }) {
  const [expandido, setExpandido] = useState(false);

  const expandir = () => {
    setExpandido(!expandido);
  };

  return (
    <article className={styles.tarjetaItem}>
      <h3>{titulo}</h3>
      <div
        className={`${styles.detalleTarjeta} ${expandido ? styles.activa : ""}`}
      >
        <div className={styles.contenedorImagenPelicula}>
          <img src={imagen} alt={titulo} />
        </div>
        <p>{sinopsis}</p>
      </div>
      <BotonExpandir
        onClick={expandir}
        texto={expandido ? "Ocultar detalles" : "Mostrar detalles"}
      />
    </article>
  );
}

export default TarjetaPelicula;
