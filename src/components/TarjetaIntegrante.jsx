import React from 'react';
import { Link } from 'react-router-dom';
import BotonEnlace from './ui/Botones/BotonEnlace';
import styles from './TarjetaIntegrante.module.css';

const TarjetaIntegrante = (props) => {
  return (
    <article className={styles.tarjetaItem}>
        <div className={styles.avatarContainer}>
            <img src={props.avatar} alt={props.textoAlternativo} />
        </div>
        <h3>{props.nombre}</h3>
        <BotonEnlace
            destino={props.destino}
            texto={props.texto}
        />
    </article>
  );
};

export default TarjetaIntegrante;
