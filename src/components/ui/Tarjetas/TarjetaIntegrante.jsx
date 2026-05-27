import React from "react";
import { Link } from "react-router-dom";
import BotonEnlace from "../Botones/BotonEnlace";
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
      <BotonEnlace destino={destino} texto={texto} />
    </article>
  );
};

export default TarjetaIntegrante;
