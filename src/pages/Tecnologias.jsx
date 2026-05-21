import React from 'react'

function Tecnologias() {
    return (
        <section id="tecnologias" className="section-main">
            <h2>Stack Tecnológico</h2>
            <p>Para el desarrollo de este proyecto, hemos integrado herramientas modernas que garantizan un flujo de trabajo profesional y eficiente:</p>
            <div className="proyectos-grid">
                <article className="tarjeta-item">
                    <h3>Desarrollo Frontend</h3>
                    <p>Implementación de maquetado semántico con HTML5, estilos avanzados con CSS3 (Flexbox/Variables) y lógica dinámica con JavaScript puro.</p>
                </article>
                <article className="tarjeta-item">
                    <h3>Asistencia y Optimización</h3>
                    <p>Uso de Inteligencia Artificial (Gemini Pro y ChatGPT) para la generación de recursos gráficos, optimización de algoritmos y asistencia técnica en la resolución de problemas de maquetado.</p>
                </article>
                <article className="tarjeta-item">
                    <h3>Despliegue y Control</h3>
                    <p>Gestión de versiones mediante Git/GitHub para el trabajo colaborativo y despliegue continuo a través de la plataforma Vercel.</p>
                </article>
            </div>
        </section>
    )
}

export default Tecnologias