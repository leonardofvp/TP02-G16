import React from "react";
import styles from "./BotonBasico.module.css";

function BotonBasico({ onClick, texto, claseAdicional }) {
  return (
    <button className={`${styles.botonBasico} ${claseAdicional || ""}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotonBasico;