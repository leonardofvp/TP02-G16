import React, { useState } from "react";
import TarjetaBasica from "./TarjetaBasica";
import styles from "./TarjetaDesplegable.module.css";
import BotonBasico from "../botones/BotonBasico";

const TarjetaDesplegable = ({ titulo, descripcion, children }) => {
  const [expandido, setExpandido] = useState(false);

  const expandir = () => {
    setExpandido(!expandido);
  };

  return (
    <TarjetaBasica titulo={titulo}>
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
    </TarjetaBasica>
  );
};

export default TarjetaDesplegable;
