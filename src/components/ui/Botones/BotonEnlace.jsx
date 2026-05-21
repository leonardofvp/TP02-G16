import React from 'react'
import PropTypes from 'prop-types'
import styles from './Boton.module.css'
import { Link } from 'react-router-dom';

function BotonEnlace(props) {
    return (
        <Link to={props.destino} className={styles.boton}> {props.texto} </Link>
    )
}

BotonEnlace.propTypes = {
    destino: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}

export default BotonEnlace
