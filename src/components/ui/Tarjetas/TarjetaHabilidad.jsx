import React from "react";
import TarjetaBasica from "./TarjetaBasica";
import styles from "./TarjetaHabilidad.module.css";
import BarraProgreso from "../Barras/BarraProgreso";

function TarjetaPersonal({ titulo, descripcion, nivel, icono }) {
  const tituloConIcono = (
    <span className={styles.contenedorTitulo}>
      {titulo}
      <span className={styles.iconoTitulo}>{icono}</span>
    </span>
  );

  return (
    <TarjetaBasica
      titulo={tituloConIcono}
      descripcion={descripcion}
    >
      <BarraProgreso nivel={nivel} />
    </TarjetaBasica>
  );
}

export default TarjetaPersonal;
