import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Proyecto realizado para la materia Desarrollo de Sistemas Web (Front
        End) - IFTS N.° 29
      </p>
      <p>Buenos Aires, Argentina - 2026</p>
    </div>
  );
}

export default Footer;
