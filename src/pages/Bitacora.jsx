import React from 'react'

function Bitacora() {
  return (
    <section id="bitacora" className="section-main">
            <h1>Bitácora del Proyecto</h1>
            <h2>Registro del Proceso de Desarrollo</h2>
            <p>Documentación de la evolución, decisiones y resolución de problemas durante la implementación del sitio web del Equipo Orión.</p>

            <div className="bitacora-grid">
				<article className="tarjeta-item">
					<h3>Decisiones de diseño tomadas</h3>
					<div className="detalle-tarjeta">
						<ul>
							<li><strong>Enfoque y Layout:</strong> Adopción de <em>Mobile First</em> estructurando el layout principal con Flexbox para responder a los breakpoints exigidos (400px, 900px y 1200px).</li>
							<li><strong>Tipografía:</strong> Estandarización con Montserrat y Roboto vía Google Fonts para garantizar consistencia visual.</li>
							<li><strong>Arquitectura:</strong> Archivos HTML en la raíz del proyecto y lógica/estilos en directorios separados (<code>/css</code>, <code>/js</code>, <code>/img</code>).</li>
							<li><strong>Estética visual:</strong> Uso de tonos azules complementarios al logotipo generado por IA (Gemini Pro), aplicando una hoja de estilos global para lograr coherencia absoluta en la navegación.</li>
							<li><strong>Animaciones:</strong> Desplazamiento horizontal para el menú hamburguesa mientras se despliega.
								Estiramiento y contracción vertical de las tarjetas al interactuar con el botón "Ver detalles" y "Ocultar detalles". Arandamiento del menú, el logo del equipo, las tarjetas y botones al hacer hover.</li>
                        </ul>
                    </div>
					<button className="boton-detalles">Ver detalles</button>
				</article>

				<article className="tarjeta-item">
					<h3>Dificultades encontradas y soluciones</h3>
					<div className="detalle-tarjeta">
						<ul>
							<li><strong>Problema de alineación:</strong> Al estructurar tarjetas personales con <code>flex-direction: column</code>, los avatares se desfasaban porque usaban un ancho porcentual (<code>width: 50%</code>), calculando su tamaño en base al contenedor en lugar de centrarse.</li>
							<li><strong>Solución técnica:</strong> Se modificó el dimensionamiento a unidades relativas estáticas (<code>14rem</code>). Esto permitió que <code>align-items: center</code> tomara el control absoluto, centrando perfectamente la imagen en cualquier resolución.</li>
						</ul>
					</div>
					<button className="boton-detalles">Ver detalles</button>
				</article>

				<article className="tarjeta-item">
					<h3>Cambios importantes realizados</h3>
					<div className="detalle-tarjeta">
						<ul>
							<li><strong>Problema de usabilidad:</strong> En las vistas individuales se rompía la regla de navegación, obligando al usuario a depender del botón "Atrás" del navegador.</li>
							<li><strong>Reestructuración:</strong> Se desarrolló un menú principal (<code>#navbar</code>) que fue replicado globalmente en todos los archivos HTML.</li>
							<li><strong>Ajuste de Scripts:</strong> Se modificó <code>menu-hamburguesa.js</code> para garantizar que las rutas relativas funcionaran correctamente desde cualquier punto del sitio.</li>
						</ul>
					</div>
					<button className="boton-detalles">Ver detalles</button>
				</article>
            </div>
        </section>

  )
}

export default Bitacora