import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TarjetaItem from '../components/TarjetaItem';

export default function PerfilGabriela() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div id="cuerpo-perfil">
      <div className="contenedor-superior">
        <header id="header" className="header">
          <div
            className="contenedor-menu-hamburguesa"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <div className={`menu-hamburguesa ${menuAbierto ? 'open' : ''}`}>
              <div className="bar-ham bar-top"></div>
              <div className="bar-ham bar-mid"></div>
              <div className="bar-ham bar-bottom"></div>
            </div>
          </div>

          <Link
            to="/"
            style={{ display: 'inline-block', width: '7rem', height: '7rem', padding: 0, lineHeight: 0 }}
            onClick={() => setMenuAbierto(false)}
          >
            <img
              src="img/logo-orion.png"
              alt="Logo"
              className="logo-equipo"
              style={{ width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover' }}
            />
          </Link>
        </header>

        <nav id="navbar" className={`navbar ${menuAbierto ? 'nav-visible' : ''}`}>
          <ul className="links-navegacion">
            <li>
              <Link to="/" className="btn-nav" onClick={() => setMenuAbierto(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/bitacora" className="btn-nav" onClick={() => setMenuAbierto(false)}>
                Bitácora
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main id="main" className="container">
        <section className="section-main">
          <article>
            <h1>Melinya Byte</h1>
            <div className="tarjeta-personal">
              <div className="perfil-info">
                <h2>Sobre mí</h2>
                <ul>
                  <li><strong>Edad:</strong>WWWW</li>
                  <li><strong>Ubicación:</strong> Buenos Aires, Argentina</li>
                </ul>
                <p>
                  Soy Melinya. Me considero una persona curiosa y creativa, lo que me llevó a interesarme por el desarrollo web. Disfruto del proceso de transformar una idea en una página funcional. Además de la programación, me interesan el diseño, la ciberseguridad y la tecnología de vanguardia. Mi objetivo como desarrollador es construir sitios web que no solo funcionen bien, sino que también conecten con las personas de manera sencilla y eficiente,
                  <strong> haciendo énfasis en la accesibilidad digital.</strong>
                </p>
              </div>
              <div className="avatar-container">
                <img src="/img/melinya-avatar.jpg" alt="Avatar de Melinya Bytes" />
              </div>
            </div>
          </article>
        </section>

        <section id="habilidades" className="section-main">
          <h2>Habilidades</h2>
          <p>Estas son algunas de mis habilidades</p>

          <div className="habilidades-grid">
            <article className="tarjeta-item">
              <h3>Modelado y análisis de datos</h3>
              <p>Especialización en la estructuración, análisis e interpretación de datos científicos.</p>
            </article>

            <article className="tarjeta-item">
              <h3>Auditoría de Resiliencia en Entornos de Tecnología Operativa (OT)</h3>
              <p>Evaluación y fortalecimiento de la continuidad operativa de los sistemas de control industrial, aplicando protocolos de ciberseguridad que garantizan la alta disponibilidad de infraestructura estratégica.</p>
            </article>

            <article className="tarjeta-item">
              <h3>Desarrollo BackEnd</h3>
              <p>Experiencia en el diseño de arquitecturas web utilizando Node.js, Express y Pug.</p>
            </article>

            <article className="tarjeta-item">
              <h3>Diseño y optimización de bases de datos</h3>
              <p>Estructuración de bases de datos garantizando integridad y rápido acceso a la información.</p>
            </article>
          </div>
        </section>

        <section id="peliculas-favoritas" className="section-main">
          <h2>Mis 3 Películas Favoritas</h2>
          <div className="peliculas-grid">
            <TarjetaItem titulo="Hasta el último hombre" imagen="/img/doss.jpg">
              <p>No matarás. En los inicios de la Segunda Guerra Mundial, Doss conoce a una joven enfermera, de quien se enamora, prometiéndose ambos una vida juntos. Pero al estallar el conflicto y al enlistarse su hermano en el ejército, decide colaborar como médico, anteponiendo una condición que impone su religión: no tocará un arma, más allá de lo peligroso que esto sea en ese entorno.</p>
            </TarjetaItem>
            <TarjetaItem titulo="Le Palais Idéal du Facteur Cheval" imagen="/img/palais.jpg">
              <p>Sur de Francia, año 1879. Ferdinand Cheval es un humilde cartero que sueña despierto con un mundo lleno de hermosos edificios que solo ha visto en las postales que reparte. Durante una de las rondas, conoce a la viuda Filomena y de su unión nace Alice. Cheval adora tanto a su hija que se propone construirle con sus propias manos un increíble palacio</p>
            </TarjetaItem>
            <TarjetaItem titulo="In time" imagen="/img/intime.jpg" >
              <p>El hallazgo de una fórmula contra el envejecimiento trae consigo no sólo superpoblación, sino también la transformación del tiempo en moneda de cambio que permite sufragar tanto lujos como necesidades. Los ricos pueden vivir para siempre, pero los demás tendrán que negociar cada minuto de vida. Los pobres mueren jóvenes</p>
            </TarjetaItem>
          </div>
        </section>

        <section id="tarjetas-musica" className="section-main">
          <h2>Mis 3 Discos Favoritos</h2>
          <p>Mis gustos musicales son eclécticos...</p>
          <div className="discos-grid">
            <TarjetaItem titulo="L comme Beauté">
              <ul>
                <li><strong>Artista:</strong> Jacques Higelin</li>
                <li><strong>Año:</strong> 1978</li>
              </ul>
            </TarjetaItem>
            <TarjetaItem titulo="Miserere meu, Deus">
              <ul>
                <li><strong>Artista:</strong> Gregorio Allegri</li>
                <li><strong>Año:</strong> 1638</li>
              </ul>
            </TarjetaItem>
            <TarjetaItem titulo="Trust - Anti Best of">
              <ul>
                <li><strong>Artista:</strong> Trust</li>
                <li><strong>Año:</strong> 1998</li>
              </ul>
            </TarjetaItem>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div>
          <p>Tarjeta realizada para la materia Desarrollo de Sistemas Web (Front End) - IFTS N.° 29</p>
          <p>Ciudad Autónoma de Buenos Aires, Argentina - 2026</p>
        </div>
      </footer>
    </div>
  );
}