import React from "react";
import styles from "./TarjetaRedesSociales.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function RedesSociales() {
  return (
    <div className={styles.contenedorRedes}>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botonRed}
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botonRed}
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botonRed}
        title="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default RedesSociales;
