import React from "react";
import PropTypes from "prop-types";
import styles from "./BotonEnlace.module.css";
import { Link } from "react-router-dom";

function BotonEnlace({ destino, texto }) {
  return (
    <Link to={destino} className={styles.boton}>
      {" "}
      {texto}{" "}
    </Link>
  );
}

export default BotonEnlace;
