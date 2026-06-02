import React from "react";
import BotonEnlace from "../botones/BotonEnlace";
import styles from "./TarjetaIntegrante.module.css";

const TarjetaIntegrante = ({
  avatar,
  avatarTextoAlternativo,
  nombre,
  destino,
  texto,
}) => {
  return (
    <article className={styles.tarjetaItem}>
      <div className={styles.avatarContainer}>
        <img src={avatar} alt={avatarTextoAlternativo} />
      </div>
      <h3>{nombre}</h3>

      {/* Contenedor específico para manejar la alineación inferior */}
      <div className={styles.contenedorBoton}>
        <BotonEnlace destino={destino} texto={texto} />
      </div>
    </article>
  );
};

export default TarjetaIntegrante;