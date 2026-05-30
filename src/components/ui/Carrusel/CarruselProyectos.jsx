  import React from "react";
  import ReactSlick from "react-slick";
  import styles from "./CarruselProyectos.module.css";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  const Slider = ReactSlick.default || ReactSlick;

  function CarruselProyectos({ proyectos }) {
    // 1. Convertimos el objeto en un array válido para React
    const listaProyectos = proyectos ? Object.values(proyectos) : [];

    // Si no hay datos válidos, no renderiza nada y evita que se rompa la pantalla
    if (listaProyectos.length === 0) {
      return null;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Muestra de a 1 para forzar el uso de controles
      slidesToScroll: 1,
      arrows: true,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    };

    return (
      <article className={styles.carrusel}>
        <div className={styles.contenedorCarrusel}>
          <Slider {...settings}>
            {listaProyectos.map((proyecto, index) => (
              <div key={index} className={styles.slideImagen}>
                <h3> {proyecto.titulo}</h3>
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
