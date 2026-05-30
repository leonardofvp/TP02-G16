import React from "react";
import TarjetaBasica from "./TarjetaBasica";
import styles from "./TarjetaPersonal.module.css";

function TarjetaPersonal({
  edad,
  ubicacion,
  descripcion,
  avatar,
  avatarTextoAlternativo,
}) {
  const imagenAvatar = (
    <img
      src={avatar}
      alt={avatarTextoAlternativo}
      className={styles.imagenAvatar}
    />
  );

  return (
    <TarjetaBasica
      titulo="Sobre Mi"
      descripcion={descripcion}
      elementoGrafico={imagenAvatar}
    >
      <ul className={styles.listaDatos}>
        <li>
          <strong>Edad: </strong>
          {edad}
        </li>
        <li>
          <strong>Ubicación: </strong>
          {ubicacion}
        </li>
      </ul>
    </TarjetaBasica>
  );
}

export default TarjetaPersonal;
