import React from "react";
import styles from "./BotonBasico.module.css";

function BotonBasico({ onClick, texto }) {
  return (
    <button className={styles.botonBasico} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotonBasico;
