import React, { useState, useEffect } from "react";
import BotonBasico from "../components/ui/Botones/BotonBasico";
import TarjetaBasica from "../components/ui/Tarjetas/TarjetaBasica";
import styles from "./ConsumoApi.module.css"

function ExploradorNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);

  const paginaSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  useEffect(() => {
    const obtenerNoticias = async () => {
      setCargando(true);
      setError(null);

      try {
        // Algolia maneja su paginación interna desde el índice 0, por eso enviamos paginaActual - 1
        // hitsPerPage=10 define el límite de resultados por consulta
        const respuesta = await fetch(
          `https://hn.algolia.com/api/v1/search?tags=story&query=technology&page=${paginaActual - 1}&hitsPerPage=10`,
        );

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const json = await respuesta.json();
        // La API de Algolia devuelve el array de datos dentro del objeto "hits"
        setNoticias(json.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerNoticias();
  }, [paginaActual]);

  return (
    <section>
      <h2>Novedades Tecnológicas</h2>
      <div className={styles.contenedorNoticias}>
        {/* Controles de Paginación */}
        <div className={styles.contenedorControles}>
          <BotonBasico onClick={paginaAnterior} texto="Anterior" />
          <span>Página {paginaActual}</span>
          <BotonBasico onClick={paginaSiguiente} texto="Siguiente" />
        </div>

        {cargando && (
          <TarjetaBasica
            titulo="Cargando"
            descripcion="Cargando últimas noticias tecnológicas..."
          />
        )}
        {error && (
          <TarjetaBasica
            titulo="Error"
            descripcion="Error al conectar con el servidor:"
          >
            {error}
          </TarjetaBasica>
        )}

        {/* Lista de Noticias */}
        {!cargando && !error &&(
        <div className={styles.contenedorTarjetaNoticia}>
          {noticias.map((noticia) => (
            <TarjetaBasica
              key={noticia.objectID}
              titulo={noticia.title}
              descripcion={`Publicado por: ${noticia.author}`}
            >
              <a
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer artículo completo →
              </a>
            </TarjetaBasica>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

export default ExploradorNoticias;
