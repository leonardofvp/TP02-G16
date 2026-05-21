import React from 'react'

function Proyectos() {
    return (
        <section id="proyectos-anteriores" className="section-main">
            <h2>Trayectoria del Equipo Orión</h2>
            <p>Previamente a este tarjeta web, nuestro equipo ha colaborado con éxito en:</p>

            <div className="proyectos-grid">
                <article className="tarjeta-item">
                    <h3>Club Deportivo Orion - Versión escritorio</h3>
                    <div className="detalle-tarjeta">
                        <p>Sistema integral de gestión de socios, cobro de cuotas y administración de actividades deportivas.</p>
                        <small>Tecnologías: C# / .NET / MySQL</small>
                    </div>
                    <button className="boton-detalles">Ver detalles</button>
                </article>

                <article className="tarjeta-item">
                    <h3>Club Deportivo Orion - Versión movil</h3>
                    <div className="detalle-tarjeta">
                        <p>Adaptación del Club Deportivo Orión para dispositivos móviles.</p>
                        <small>Tecnologías: Kotlin / Android Studio</small>
                    </div>
                    <button className="boton-detalles">Ver detalles</button>
                </article>

                <article className="tarjeta-item">
                    <h3>Clínica SePrice</h3>
                    <div className="detalle-tarjeta">
                        <p>Prototipo integral de gestión hospitalaria y administración de turnos.</p>
                        <small>Tecnologías: C# / .NET / MySQL / Figma</small>
                    </div>
                    <button className="boton-detalles">Ver detalles</button>
                </article>
            </div>
        </section>
    )
}

export default Proyectos