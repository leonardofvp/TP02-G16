import React, { useState } from "react";
import styles from "./TarjetaDesplegable.module.css";
import BotonBasico from "../Botones/BotonBasico";

const TarjetaDesplegable = ({ titulo, descripcion, children }) => {
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
        <p>{descripcion}</p>
        {children}
      </div>

      <BotonBasico
        onClick={expandir}
        texto={expandido ? "Ocultar detalles" : "Mostrar detalles"}
      />
    </article>
  );
};

export default TarjetaDesplegable;
