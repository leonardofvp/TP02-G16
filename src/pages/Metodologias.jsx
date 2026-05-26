import React from 'react';
import TarjetaSeccion from '../components/TarjetaSeccion';
import styles from './Metodologias.module.css';

function Metodologias() {
    return (
        <section className={styles.seccionMetodologias}>
            <h2>Cómo trabajamos</h2>
            <div className={styles.contenedorMetodologias}>
                <TarjetaSeccion
                    titulo="Innovación"
                    descripcion="Buscamos soluciones creativas a problemas técnicos complejos."
                />

                <TarjetaSeccion
                    titulo="Calidad"
                    descripcion="Aplicamos buenas prácticas de código y diseño responsivo."
                />

                <TarjetaSeccion
                    titulo="Sinergia"
                    descripcion="Potenciamos nuestras habilidades individuales en cada proyecto grupal."
                />
            </div>
        </section>
    );
}

export default Metodologias;