import React, { useState, useEffect } from "react";
import styles from "./Galeria.module.css";
import BotonBasico from "../components/ui/botones_temp/BotonBasico";

function Galeria() {
  // Array de imágenes de prueba. Podés cambiarlas por imágenes de tus proyectos.
  const imagenes = [
    "https://picsum.photos/id/10/800/600",
    "https://picsum.photos/id/11/800/600",
    "https://picsum.photos/id/12/800/600",
    "https://picsum.photos/id/13/800/600",
    "https://picsum.photos/id/14/800/600",
    "https://picsum.photos/id/15/800/600",
  ];

  const [indiceActivo, setIndiceActivo] = useState(null);

  const abrirLightbox = (index) => setIndiceActivo(index);
  const cerrarLightbox = () => setIndiceActivo(null);

  const imagenSiguiente = (e) => {
    e.stopPropagation();
    setIndiceActivo((prevIndice) =>
      prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1,
    );
  };

  const imagenAnterior = (e) => {
    e.stopPropagation();
    setIndiceActivo((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1,
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
      <p>Estas son las imagenes de los proyectos individuales de los integrantes para que se visualicen mejor</p>
      <div className={styles.grillaGaleria}>
        {imagenes.map((url, index) => (
          <div
            key={index}
            className={styles.itemGrilla}
            onClick={() => abrirLightbox(index)}
          >
            <img
              src={url}
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

          <img
            src={imagenes[indiceActivo]}
            alt="Imagen ampliada"
            className={styles.imagenLightbox}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Galeria;
