import React from "react";
import TarjetaBasica from "../tarjetas/TarjetaBasica";
import styles from "./TarjetaRedesSociales.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function RedesSociales() {
  return (
    <TarjetaBasica>
      <div className={styles.contenedorRedes}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.botonRed}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.botonRed}>
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.botonRed}>
          <FaInstagram />
        </a>
      </div>
    </TarjetaBasica>
  );
}

export default RedesSociales;