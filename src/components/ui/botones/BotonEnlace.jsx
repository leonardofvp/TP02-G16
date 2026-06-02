import React from "react";
import PropTypes from "prop-types";
import styles from "./BotonEnlace.module.css";
import { Link } from "react-router-dom";

function BotonEnlace({ destino, texto, onClick }) {
  return (
    <Link to={destino} className={styles.boton} onClick={onClick}>
      {texto}
    </Link>
  );
}

BotonEnlace.propTypes = {
  destino: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default BotonEnlace;