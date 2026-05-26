import React from 'react';
import styles from './BotonExpandir.module.css';

function BotonExpandir({expandido, onClick}) {
    return (
        <button className={styles.botonExpandir} onClick={onClick}>
            {expandido ? 'Ocultar detalles' : 'Mostrar detalles'}
        </button>
    );
}

export default BotonExpandir;