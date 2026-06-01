import React from "react";
import styles from "./ArbolRenderizado.module.css";
import TarjetaBasica from "../components/ui/tarjetas/TarjetaBasica";

function ArbolRenderizado() {
  return (
    <section className={styles.seccionArbol}>
      <div className={styles.contenedorTexto}>
        <h1>Arquitectura de Componentes</h1>
        <p>
          Representación esquemática de la jerarquía y el flujo de herencia
          estructural de la aplicación.
        </p>
      </div>
      <div className={styles.contenedorTarjetaArbol}>
        <TarjetaBasica titulo="Árbol de Renderizado del Proyecto">
          <div className={styles.contenedorEsquema}>
            <pre className={styles.codigoArbol}>
              {`[main.jsx] (Punto de entrada / Nodo Raíz)
 └── [App.jsx] (Contexto de Enrutamiento)
      └── [Layout.jsx] (Estructura de Interfaz Fija)
           ├── [Header.jsx]
           │    └── [BotonHamburguesa.jsx] (Control de UI móvil)
           ├── [Sidebar.jsx]
           │    └── [BotonEnlace.jsx] (Navegación declarativa)
           ├── [Footer.jsx]
           │
           └── [Outlet] (Punto de inyección dinámica de páginas)
                │
                ├── Vistas Estáticas:
                │    ├── [Home.jsx]
                │    │    └── [TarjetaIntegrante.jsx] ──> [BotonEnlace.jsx]
                │    ├── [Metodologias.jsx]
                │    │    └── [TarjetaBasica.jsx]
                │    ├── [Árbol.jsx]
                │    │    └── [TarjetaBasica.jsx]
                │    ├── [Bitacora.jsx]
                │    │    └── [TarjetaDesplegable.jsx] (Componente contenedor con lógica de estado)
                │    │         ├── ──> [TarjetaBasica.jsx] (Plantilla visual base)
                │    │         └── ──> [BotonBasico.jsx] (Controlador del evento onClick)
                │    ├── [Galeria.jsx]
                │    │    └── [BotonBasico.jsx]
                │    ├── [Proyectos.jsx]
                │    │    └── [CarruselProyectos.jsx]
                │    │         └── [BotonBasico.jsx]
                │    └── [ConsumoApi.jsx] (ExploradorNoticias)
                │         ├── [BotonBasico.jsx]
                │         └── [TarjetaBasica.jsx]
                │
                └── Vistas Dinámicas (Parámetros por URL):
                     └── [Perfil.jsx]
                          └── [TarjetaIntegrante.jsx]
                               ├── [TarjetaPersonal.jsx] ──────> [TarjetaBasica.jsx]
                               ├── [TarjetaHabilidad.jsx]
                               │    ├── ──> [TarjetaBasica.jsx]
                               │    └── ──> [BarraProgreso.jsx]
                               ├── [TarjetaPelicula.jsx] ──────> [BotonBasico.jsx]
                               └── [TarjetaRedesSociales.jsx] ─> [TarjetaBasica.jsx]`}
            </pre>
          </div>
        </TarjetaBasica>
      </div>
      <div className={styles.contenedorDesglose}>
        <TarjetaBasica titulo="Desglose de la Estructura Jerárquica">
          <ul>
            <li>
              <strong>Componente Raíz (App):</strong> Configura el proveedor de
              rutas de React Router y gestiona el punto de partida del ciclo de
              vida de la interfaz.
            </li>
            <li>
              <strong>Componentes de Nivel Superior (Layout):</strong> Actúan
              como contenedores globales estructurales. <code>Layout.jsx</code>{" "}
              coordina la posición fija del <code>Header</code> y la{" "}
              <code>Sidebar</code>, permitiendo que solo el contenido del{" "}
              <code>Outlet</code> se re-renderice al cambiar de ruta.
            </li>
            <li>
              <strong>Componentes Hijos y Reutilizables (UI):</strong> Ubicados
              en los nodos hoja del árbol (<code>TarjetaBasica</code>,{" "}
              <code>BotonBasico</code>). Reciben la información de forma
              unidireccional a través de props y se comportan como componentes
              puros y atómicos encargados exclusivamente de la representación
              visual.
            </li>
          </ul>
        </TarjetaBasica>
      </div>
    </section>
  );
}

export default ArbolRenderizado;
