import React from "react";
import { useParams } from "react-router-dom";
import integrantesData from "../data/IntegrantesData.json";
import TarjetaPersonal from "../components/ui/Tarjetas/TarjetaPersonal";
import TarjetaHabilidad from "../components/ui/Tarjetas/TarjetaHabilidad";
import TarjetaRedesSociales from "../components/ui/Tarjetas/TarjetaRedesSociales";
import TarjetaPelicula from "../components/ui/Tarjetas/TarjetaPelicula";
import TarjetaBasica from "../components/ui/Tarjetas/TarjetaBasica";
import TarjetaDesplegable from "../components/ui/Tarjetas/TarjetaDesplegable";
import CarruselProyectos from "../components/ui/Carrusel/CarruselProyectos";
import BarraProgreso from "../components/ui/Barras/BarraProgreso";
import { obtenerAvatar } from "../utils/diccionarioAvatares"
import { obtenerIconoHabilidad } from "../utils/diccionarioIconosHabilidades";
import { obtenerImagenPelicula } from "../utils/diccionarioImagenesPeliculas";
import { obtenerProyectosPersonales } from "../utils/diccionarioProyectosPersonales";
import styles from "./Perfil.module.css";

function Perfil() {
  const { id } = useParams();
  const integrante = integrantesData.find((integrante) => integrante.id === id);

  if (!integrante) {
    return (
      <section>
        <article>
          <h1>Integrante no encontrado</h1>
        </article>
      </section>
    );
  }

  return (
    <>
      <section className={styles.seccionPerfil}>
        <article>
          <h2>{integrante.nombre}</h2>
          <TarjetaPersonal
            edad={integrante.edad}
            ubicacion={integrante.ubicacion}
            descripcion={integrante.descripcion}
            avatar={obtenerAvatar(integrante.id)}
            avatarTextoAlternativo={integrante.nombre}
          ></TarjetaPersonal>
        </article>
      </section>

      <section className={styles.seccionPerfil}>
        <article>
          <h2>Mis habilidades</h2>

          {integrante.habilidades.descripcion && (
            <p>{integrante.habilidades.descripcion}</p>
          )}

          <div className={styles.contenedorTarjetas}>
            {integrante.habilidades.items.map((habilidad) => (
              <TarjetaHabilidad
                key={habilidad.id}
                titulo={habilidad.titulo}
                descripcion={habilidad.descripcion}
                nivel={habilidad.nivel}
                icono={obtenerIconoHabilidad(integrante.id, habilidad.id)}
              />
            ))}
          </div>
        </article>
      </section>

      <section className={styles.seccionPerfil}>
        <h2>Mis proyectos</h2>
        <div className={styles.contenedorCarrusel}>
          <CarruselProyectos
            proyectos={obtenerProyectosPersonales(integrante.id)}
          />
        </div>
      </section>

      <section className={styles.seccionPerfil}>
        <article>
          <h2>Mis 3 películas favoritas</h2>

          {integrante.peliculas.descripcion && (
            <p>{integrante.peliculas.descripcion}</p>
          )}

          <div className={styles.contenedorTarjetas}>
            {integrante.peliculas.items.map((pelicula) => (
              <TarjetaPelicula
                key={pelicula.id}
                titulo={pelicula.titulo}
                imagen={obtenerImagenPelicula(integrante.id, pelicula.id)}
                sinopsis={pelicula.sinopsis}
              />
            ))}
          </div>
        </article>
      </section>

      {integrante.seccionExtra && (
        <section className={styles.seccionPerfil}>
          <article>
            <h2>{integrante.seccionExtra.tituloPrincipal}</h2>

            {integrante.seccionExtra.descripcion && (
              <p>{integrante.seccionExtra.descripcion}</p>
            )}

            <div className={styles.contenedorTarjetas}>
              {integrante.seccionExtra.items.map((item) => (
                <TarjetaBasica key={item.id} titulo={item.titulo}>
                  <ul className={styles.listaDetalles}>
                    {item.detalles.map((detalle, index) => (
                      <li key={index}>
                        <strong>{detalle.etiqueta}:</strong> {detalle.valor}
                      </li>
                    ))}
                  </ul>
                </TarjetaBasica>
              ))}
            </div>
          </article>
        </section>
      )}

      <section className={styles.seccionPerfil}>
        <article>
          <h2>Mis redes sociales</h2>

          <div className={styles.contenedorTarjetas}>
            <TarjetaRedesSociales />
          </div>
        </article>
      </section>
    </>
  );
}

export default Perfil;
