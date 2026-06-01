import React, { useState, useEffect } from "react";
import styles from "./Galeria.module.css";
import BotonBasico from "../components/ui/botones/BotonBasico";
import { obtenerTodosLosProyectos } from "../utils/diccionarioProyectosPersonales";

function Galeria() {
  const proyectos = obtenerTodosLosProyectos();
  const [indiceActivo, setIndiceActivo] = useState(null);
  const abrirLightbox = (index) => setIndiceActivo(index);
  const cerrarLightbox = () => setIndiceActivo(null);

  const imagenSiguiente = (e) => {
    e.stopPropagation();
    setIndiceActivo((prevIndice) =>
      prevIndice === proyectos.length - 1 ? 0 : prevIndice + 1,
    );
  };

  const imagenAnterior = (e) => {
    e.stopPropagation();
    setIndiceActivo((prevIndice) =>
      prevIndice === 0 ? proyectos.length - 1 : prevIndice - 1,
    );
  };

  useEffect(() => {
    const manejarTecla = (e) => {
      if (e.key === "Escape") {
        cerrarLightbox();
      }
    };

    if (indiceActivo !== null) {
      window.addEventListener("keydown", manejarTecla);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", manejarTecla);
      document.body.style.overflow = "unset";
    };
  }, [indiceActivo]);

  return (
    <section className={styles.seccionGaleria}>
      <h2>Galeria de imagenes</h2>
      <p>
        Estas son las imagenes de los proyectos individuales de los integrantes para mejor visualización.
      </p>
      <div className={styles.grillaGaleria}>
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className={styles.itemGrilla}
            onClick={() => abrirLightbox(index)}
          >
            <img
              src={proyecto.img}
              alt={`Imagen de galería ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Renderizado Condicional del Lightbox */}
      {indiceActivo !== null && (
        <div className={styles.lightboxOverlay} onClick={cerrarLightbox}>
          <div className={styles.contenedorBotones}>
            <BotonBasico texto="&#10094;" onClick={imagenAnterior} />

            <BotonBasico texto="X" onClick={cerrarLightbox} />

            <BotonBasico texto="&#10095;" onClick={imagenSiguiente} />
          </div>
          <div>
            <h3>{proyectos[indiceActivo].titulo}</h3>
          </div>
          <img
            src={proyectos[indiceActivo].img}
            alt={proyectos[indiceActivo].titulo}
            className={styles.imagenLightbox}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Galeria;
