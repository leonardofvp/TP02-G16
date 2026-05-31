import React, { useRef } from "react"; // Importamos useRef
import ReactSlick from "react-slick";
import BotonBasico from "../Botones/BotonBasico";
import styles from "./CarruselProyectos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ReactSlick.default || ReactSlick;

function CarruselProyectos({ proyectos }) {
  // 1. Creamos la referencia para controlar el slider
  const sliderRef = useRef(null);

  const listaProyectos = proyectos ? Object.values(proyectos) : [];

  if (listaProyectos.length === 0) {
    return null;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <article className={styles.carrusel}>
      <div className={styles.contenedorBotones}>
        <BotonBasico
          onClick={() => sliderRef.current.slickPrev()}
          texto="&#10094;"
          claseAdicional={styles.flechaHeader}
        />
        <BotonBasico
          onClick={() => sliderRef.current.slickNext()}
          texto="&#10095;"
          claseAdicional={styles.flechaHeader}
        />
      </div>

      <div className={styles.contenedorCarrusel}>
        <Slider ref={sliderRef} {...settings}>
          {listaProyectos.map((proyecto, index) => (
            <div key={index} className={styles.slideImagen}>
              <h3>{proyecto.titulo}</h3>
              <img
                src={proyecto.img}
                alt={proyecto.titulo}
                className={styles.imagenSola}
              />
              <p>{proyecto.descripcion}</p>
            </div>
          ))}
        </Slider>
      </div>
    </article>
  );
}

export default CarruselProyectos;
