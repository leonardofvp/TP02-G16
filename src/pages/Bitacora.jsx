import React from "react";
import TarjetaDesplegable from "../components/ui/tarjetas/TarjetaDesplegable"; // Ajustá esta ruta si cambiaste el nombre de la carpeta a kebab-case
import styles from "./Bitacora.module.css";

function Bitacora() {
  return (
    <section className={styles.contenedorSecundario}>
      <h2>Bitacora del proyecto</h2>
      <p>
        Documentación técnica sobre la evolución del proyecto, metodologías
        ágiles y resolución de problemas durante la migración hacia la
        arquitectura React.
      </p>

      <div className={styles.contenedorBitacora}>
        {/* --- REQUERIMIENTO: JUSTIFICACIÓN DE MIGRACIÓN --- */}
        <TarjetaDesplegable
          titulo="1. Justificación de Migración a React"
          boton={true}
        >
          <div className={styles.contenedorLista}>
            <p>
              El proceso de evolución de la estructura estática a la
              arquitectura de React se fundamenta en:
            </p>
            <br />
            <ul>
              <li>
                <strong>Componentización:</strong> Se fragmentó la interfaz en
                componentes funcionales independientes, estructurándolos
                jerárquicamente: desde elementos pequeños (botones, barras,
                inputs y tarjetas), pasando por componentes de Layout (Header,
                Footer y Sidebar), hasta conformar las vistas principales
                (Páginas). Esto eliminó la duplicación de código presente en los
                archivos HTML originales y centralizó el mantenimiento.
              </li>
              <li>
                <li>
                  <strong>Carga Dinámica de Datos:</strong> Se creó un archivo
                  JSON local como fuente de datos de los integrantes. Esto
                  permite que, al consultar un perfil, React Router capture el
                  ID desde la URL y cargue la información correspondiente en
                  tiempo real. De esta manera, se evita generar múltiples
                  archivos físicos por cada integrante, centralizando el
                  renderizado en un único componente de página que se hidrata
                  dinámicamente según corresponda.
                </li>
              </li>
              <li>
                <strong>Renderizado Dinámico Multi-Entidad:</strong> Para
                optimizar la presentación de distintas categorías de información
                (películas, iconos y proyectos de los integrantes), se
                implementó el consumo de múltiples archivos <code>.js</code>.
                Mediante el método <code>map()</code>, los componentes
                funcionales iteran sobre estas colecciones y renderizan la
                interfaz de forma automatizada. Esto no solo erradica la
                maquetación manual repetitiva, sino que sienta las bases para
                escalar la aplicación de forma ágil y centralizada.
              </li>
              <li>
                <strong>Manejo Declarativo del Estado:</strong> Se adoptó el
                hook <code>useState</code> para las interfaces dinámicas
                (buscador de datos locales, galería). Esto reemplazó la
                manipulación imperativa del DOM, delegando las actualizaciones
                de la UI al Virtual DOM de React.
              </li>
              <li>
                <strong>Single Page Application (SPA):</strong> La integración
                de React Router eliminó las recargas completas del navegador.
                Ahora las vistas se montan y desmontan sobre el nodo principal,
                garantizando transiciones fluidas.
              </li>
            </ul>
          </div>
        </TarjetaDesplegable>

        {/* --- REQUERIMIENTO: FLUJO DE TRABAJO --- */}
        <TarjetaDesplegable
          titulo="2. Flujo de Trabajo y Control de Versiones"
          boton={true}
        >
          <div className={styles.contenedorLista}>
            <ul>
              <li>
                <strong>Gestión de Tareas (Trello / Kanban):</strong> El equipo
                organizó los requerimientos bajo una metodología ágil. Se
                definieron las fases de desarrollo: Backlog (requisitos técnicos
                del TP2), To Do, In Progress (desarrollo de componentes), y
                Done.
              </li>
              <li>
                <strong>Control de Versiones (Flujo Centralizado):</strong>
                <ul>
                  <li>
                    <strong>Rama main exclusiva:</strong> Se optó por una
                    estrategia de integración continua directa sobre la rama{" "}
                    <code>main</code>[cite: 54].
                  </li>
                  <li>
                    <strong>Prevención de conflictos:</strong> Esta decisión fue
                    viable gracias a la estricta modularización de React. Al
                    encargarse cada integrante de componentes funcionales
                    aislados, se pudo trabajar modificando archivos distintos
                    sin generar colisiones severas.
                  </li>
                  <li>
                    <strong>Sincronización:</strong> La ausencia de ramas
                    secundarias se compensó con comunicación sincrónica del
                    equipo antes de cada <code>commit</code> y <code>push</code>
                    , garantizando la estabilidad del entorno de producción.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </TarjetaDesplegable>

        {/* --- REQUERIMIENTO: ROLES TÉCNICOS --- */}
        <TarjetaDesplegable
          titulo="3. Distribución de Roles Técnicos"
          boton={true}
        >
          <div className={styles.contenedorLista}>
            <ul>
              <li>
                <strong>Leandro Ferrero:</strong> Lógica de estado para la
                Galería Interactiva (Lightbox), navegación cíclica, adaptación
                de la grilla responsiva, logica de diccionarios y del JSON con
                los datos de los integrantes para las cargas dinámicas.
              </li>
              <li>
                <strong>Carolina Corradi:</strong> Arquitectura de enrutamiento
                (React Router) y maquetado estructural de la Sidebar.
              </li>
              <li>
                <strong>Manuel Espíndola:</strong> Módulo asíncrono para el
                consumo de la API externa, manejo de los estados de carga y
                documentación.
              </li>
              <li>
                <strong>Gabriela Gonzalez:</strong> Implementación del
                explorador de datos (JSON) y algoritmos de filtrado en tiempo
                real.
              </li>
              <li>
                <strong>Leonardo Vargas:</strong> Maquetado del panel central,
                diseño de componentes de tarjetas y animaciones CSS de entrada.
              </li>
            </ul>
          </div>
        </TarjetaDesplegable>

        {/* --- RESOLUCIÓN DE PROBLEMAS TP2 --- */}
        <TarjetaDesplegable
          titulo="4. Dificultades Técnicas y Soluciones (React)"
          boton={true}
        >
          <div className={styles.contenedorLista}>
            <ul>
              <li>
                <strong>Renderizado infinito en API:</strong> El llamado
                asíncrono actualizaba el estado (<code>setNoticias</code>,{" "}
                <code>setCargando</code>), forzando un nuevo renderizado del
                componente que volvía a disparar la petición original, creando
                un ciclo infinito de consultas.
                <br />
                <em>Solución:</em> Se encapsuló el <code>fetch</code> dentro de
                un <code>useEffect</code> declarando explícitamente a{" "}
                <code>[paginaActual]</code> como su única dependencia. De esta
                forma, la API se consume exclusivamente durante el montaje
                inicial y cada vez que el usuario interactúa con la paginación,
                aislando la lógica asíncrona de las actualizaciones de la
                interfaz.
              </li>

              <li>
                <strong>Responsividad del Carrusel:</strong> El contenedor y sus
                imágenes internas desbordaban el ancho de la vista en
                resoluciones móviles, rompiendo el layout general de la
                aplicación.
                <br />
                <em>Solución:</em> Se aplicó una estrategia Mobile First
                definiendo un <code>max-width: 100vw</code> junto con{" "}
                <code>overflow: hidden</code> y{" "}
                <code>box-sizing: border-box</code> para cortar de raíz el
                desbordamiento horizontal. Posteriormente, se escalaron
                progresivamente los anchos máximos del contenedor (desde{" "}
                <code>18rem</code> hasta <code>50rem</code>) y de las imágenes
                utilizando Media Queries para los breakpoints de 900px y 1200px.
              </li>
              <li>
                <strong>Controles de navegación del Carrusel:</strong> Los
                botones por defecto del carrusel desconfiguraban el layout y
                generaban problemas de visualización en pantallas pequeñas al
                superponerse con el contenido.
                <br />
                <em>Solución:</em> Se anularon los controles por defecto y se
                reemplazaron reutilizando el componente propio{" "}
                <code>&lt;BotonBasico&gt;</code>. Para optimizar el espacio en
                dispositivos móviles, los controles se extrajeron del flujo de
                la imagen y se reubicaron en la parte superior mediante un
                contenedor flexible (<code>display: flex</code>).
              </li>
              <li>
                <strong>Bloqueo de scroll en Lightbox:</strong> El modal (
                <code>position: fixed</code>) impedía desplazar imágenes altas
                en pantallas móviles.
                <br />
                <em>Solución:</em> Aplicación de <code>overflow-y: auto</code>{" "}
                en el contenedor principal del modal.
              </li>
              <li>
                <strong>Filtrado estricto en JSON:</strong> El buscador fallaba
                ante diferencias de mayúsculas/minúsculas.
                <br />
                <em>Solución:</em> Normalización de los strings con{" "}
                <code>toLowerCase()</code> antes de evaluar la coincidencia con{" "}
                <code>includes()</code>.
              </li>
              <li>
                <strong>Desafío de alineación:</strong> Las tarjetas iniciales
                presentaban desfases en los avatares por el uso de anchos
                porcentuales.
                <br />
                <em>Solución:</em> Se solucionó reemplazándolos por unidades
                relativas estáticas (<code>14rem</code>) permitiendo que{" "}
              </li>
            </ul>
          </div>
        </TarjetaDesplegable>

        {/* --- REGISTRO HISTÓRICO TP1 --- */}
        <TarjetaDesplegable
          titulo="5. Registro Histórico: Maquetado Estático TP1"
          boton={true}
        >
          <div className={styles.contenedorLista}>
            <p>
              Decisiones base establecidas previo a la migración de la
              arquitectura:
            </p>
            <br />
            <ul>
              <li>
                <strong>Layout Original:</strong> Adopción de un enfoque Mobile
                First utilizando Flexbox para abarcar los breakpoints
                estipulados.
              </li>
              <li>
                <strong>Estética visual:</strong> Paleta en tonos azules,
                tipografías Montserrat y Roboto, y logotipo base generado por
                IA.
              </li>
            </ul>
          </div>
        </TarjetaDesplegable>
      </div>
    </section>
  );
}

export default Bitacora;
