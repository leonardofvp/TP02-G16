import React from "react";
import { useParams } from "react-router-dom";
import integrantesData from "../data/IntegrantesData.json";
import TarjetaPersonal from "../components/ui/Tarjetas/TarjetaPersonal";
import TarjetaRedesSociales from "../components/ui/Tarjetas/TarjetaRedesSociales";
import TarjetaPelicula from "../components/ui/Tarjetas/TarjetaPelicula";
import TarjetaSeccion from "../components/ui/Tarjetas/TarjetaSeccion";
import BarraProgreso from "../components/ui/Barras/BarraProgreso";
import mapaAvatares from "../data/mapaAvatares";
import mapaPeliculas from "../data/mapaPeliculas";
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
            avatar={mapaAvatares[integrante.id]}
            avatarTextoAlternativo={integrante.nombre}
          />
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
              <TarjetaSeccion
                key={habilidad.id}
                titulo={habilidad.titulo}
                descripcion={habilidad.descripcion}
                boton={false}
              >
                <BarraProgreso nivel={habilidad.nivel} />
              </TarjetaSeccion>
            ))}
          </div>
        </article>
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
                imagen={mapaPeliculas[integrante.id][pelicula.id]}
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
                <TarjetaSeccion
                  key={item.id}
                  titulo={item.titulo}
                  boton={false}
                >
                  <ul className={styles.listaDetalles}>
                    {item.detalles.map((detalle, index) => (
                      <li key={index}>
                        <strong>{detalle.etiqueta}:</strong> {detalle.valor}
                      </li>
                    ))}
                  </ul>
                </TarjetaSeccion>
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
