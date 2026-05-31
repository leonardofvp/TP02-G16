import React, { useState, useEffect } from "react";
import BotonBasico from "../components/ui/Botones/BotonBasico";
import TarjetaBasica from "../components/ui/Tarjetas/TarjetaBasica";
import styles from "./ConsumoApi.module.css";

function ExploradorNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [desvaneciendo, setDesvaneciendo] = useState(false);
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
        const respuesta = await fetch(
          `https://hn.algolia.com/api/v1/search?tags=story&query=technology&page=${paginaActual - 1}&hitsPerPage=10`,
        );

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const json = await respuesta.json();
        setNoticias(json.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        // 2. Activamos la clase CSS de salida
        setDesvaneciendo(true);

        // 3. Retrasamos el desmontaje del componente por 400ms
        setTimeout(() => {
          setCargando(false);
          setDesvaneciendo(false);
        }, 400);
      }
    };

    obtenerNoticias();
  }, [paginaActual]);

  return (
    <section>
      <h2>Novedades Tecnológicas</h2>
      <div className={styles.contenedorNoticias}>
        <div className={styles.contenedorControles}>
          <BotonBasico onClick={paginaAnterior} texto="Anterior" />
          <span>Página {paginaActual}</span>
          <BotonBasico onClick={paginaSiguiente} texto="Siguiente" />
        </div>

        {cargando && (
          <div
            className={
              desvaneciendo ? styles.estadoSaliendo : styles.estadoEntrando
            }
          >
            <TarjetaBasica
              titulo="Cargando"
              descripcion="Cargando últimas noticias tecnológicas..."
            />
          </div>
        )}
        {error && (
          <TarjetaBasica
            titulo="Error"
            descripcion="Error al conectar con el servidor:"
          >
            {error}
          </TarjetaBasica>
        )}

        {!cargando && !error && (
          <div className={styles.contenedorTarjetaNoticia}>
            {noticias.map((noticia, index) => (
              <div
                key={noticia.objectID}
                className={`${styles.tarjetaAnimada} ${styles[`retraso${index}`]}`}
              >
                <TarjetaBasica
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ExploradorNoticias;
