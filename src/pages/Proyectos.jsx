import React, { useState } from "react";
import TarjetaBasica from "../components/ui/Tarjetas/TarjetaBasica";
import InputBasico from "../components/ui/Imput/InputBasico";
import styles from "./Proyectos.module.css";
import datosProyectos from "../data/proyectos.json";

function Proyectos() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const proyectosFiltrados = datosProyectos.filter((proyecto) => {
    const textoBuscado = terminoBusqueda.toLowerCase();
    return (
      proyecto.titulo.toLowerCase().includes(textoBuscado) ||
      proyecto.tecnologias.toLowerCase().includes(textoBuscado) ||
      proyecto.categoria.toLowerCase().includes(textoBuscado)
    );
  });

  // 2. Renderizado del JSX
  return (
    <section className={styles.contenedorExplorador}>
      <h2>Explorador de Proyectos</h2>

      {/* Input de Búsqueda */}
      <div className={styles.contenedorBuscador}>
        <InputBasico
          type="text"
          placeholder="Buscar por nombre, tecnología o categoría..."
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
        />
      </div>

      {/* Grilla de Resultados */}
      <div className={styles.grillaProyectos}>
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map((proyecto) => (
            <TarjetaBasica
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
            >
              <div className={styles.etiquetas}>
                <ul>
                  <li><strong>Tecnologias:</strong> {proyecto.tecnologias}</li>
                  <li><strong>Categoria:</strong> {proyecto.categoria}</li>
                </ul>
              </div>
            </TarjetaBasica>
          ))
        ) : (
          <p className={styles.mensajeVacio}>
            No se encontraron proyectos que coincidan con la búsqueda.
          </p>
        )}
      </div>
    </section>
  );
}

export default Proyectos;
