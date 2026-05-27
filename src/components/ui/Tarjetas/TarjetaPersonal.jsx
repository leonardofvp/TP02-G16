import React from "react";
import styles from "./TarjetaPersonal.module.css";
import RedesSociales from "./TarjetaRedesSociales";

function TarjetaPersonal({
  edad,
  ubicacion,
  descripcion,
  avatar,
  avatarTextoAlternativo,
}) {
  return (
    <div className={styles.tarjetaPersonal}>
      <div>
        <h3>Sobre mí</h3>
        <ul>
          <li>
            <strong>Edad: </strong>
            {edad}
          </li>
          <li>
            <strong>Ubicación: </strong>
            {ubicacion}
          </li>
        </ul>
        <p>{descripcion}</p>
      </div>
      <div className={styles.contenedorAvatar}>
        <img src={avatar} alt={avatarTextoAlternativo} />
      </div>
    </div>
  );
}

export default TarjetaPersonal;
