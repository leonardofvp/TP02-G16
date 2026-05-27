import React, { useState } from "react";
import styles from "./TarjetaSeccion.module.css";
import BotonExpandir from "../Botones/BotonExpandir";

const TarjetaSeccion = ({ titulo, descripcion, boton, children }) => {
  const [expandido, setExpandido] = useState(false);

  const expandir = () => {
    setExpandido(!expandido);
  };

  const esVisible = !boton || expandido;

  return (
    <article className={styles.tarjetaItem}>
      <h3>{titulo}</h3>

      <div
        className={`${styles.detalleTarjeta} ${esVisible ? styles.activa : ""}`}
      >
        <p>{descripcion}</p>
        {children}
      </div>

      {boton && (
        <BotonExpandir expandido={expandido} onClick={expandir}></BotonExpandir>
      )}
    </article>
  );
};

export default TarjetaSeccion;
