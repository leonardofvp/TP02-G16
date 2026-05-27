import React from "react";
import styles from "./BotonMenuHamburguesa.module.css";

function BotonHamburguesa(props) {
  const clasesMenu = `${styles.menuHamburguesa} ${props.menuAbierto ? styles.activo : ""}`;
  return (
    <button onClick={props.toggleMenu} className={styles.boton}>
      <div className={`${clasesMenu}`}>
        <div className={`${styles.barHam} ${styles.barTop}`}></div>
        <div className={`${styles.barHam} ${styles.barMid}`}></div>
        <div className={`${styles.barHam} ${styles.barBottom}`}></div>
      </div>
    </button>
  );
}

export default BotonHamburguesa;
