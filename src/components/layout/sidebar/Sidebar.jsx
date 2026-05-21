import React from 'react';
import styles from './Sidebar.module.css';
import logoEquipo from '../../../assets/img/logo-equipo.png'
import BotonEnlace from '../../ui/Botones/BotonEnlace';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img src={logoEquipo} alt="Logo del equipo orión" className={styles.logoEquipo} />
            <ul>
                <li><BotonEnlace destino='/' texto='Inicio'/></li>
                <li><BotonEnlace destino='/bitacora' texto='Bitacora'/></li>
                <li><BotonEnlace destino='/equipo' texto='Equipo'/></li>
                <li><BotonEnlace destino='/metodologias' texto='Metodologias'/></li>
                <li><BotonEnlace destino='tecnologias' texto='Tecnologias'/></li>
                <li><BotonEnlace destino='/proyectos' texto='Proyectos'/></li>
            </ul>
        </div>
  )
}

export default Sidebar