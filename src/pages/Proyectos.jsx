import React from 'react';
import TarjetaSeccion from '../components/TarjetaSeccion';
import styles from './Proyectos.module.css';

function Proyectos() {
    return (
        <section>
            <h2>Trayectoria del Equipo Orión</h2>
            <p>Previamente a este proyecto web, nuestro equipo ha colaborado con éxito en:</p>

            <div className={styles.contenedorProyectos}>
                <TarjetaSeccion
                    titulo="Club Deportivo Orion - Versión escritorio"
                    descripcion="Sistema integral de gestión de socios, cobro de cuotas y administración de actividades deportivas."
                    boton={true}
                >
                    <small>Tecnologías: C# / .NET / MySQL</small>
                </TarjetaSeccion>

                <TarjetaSeccion
                    titulo="Club Deportivo Orion - Versión movil"
                    descripcion="Adaptación del Club Deportivo Orión para dispositivos móviles."
                    boton={true}
                >
                    <small>Tecnologías: Kotlin / Android Studio</small>
                </TarjetaSeccion>

                <TarjetaSeccion
                    titulo="Clínica SePrice"
                    descripcion="Prototipo integral de gestión hospitalaria y administración de turnos."
                    boton={true}
                >
                    <small>Tecnologías: C# / .NET / MySQL / Figma</small>
                </TarjetaSeccion>
            </div>
        </section>
    );
}

export default Proyectos;