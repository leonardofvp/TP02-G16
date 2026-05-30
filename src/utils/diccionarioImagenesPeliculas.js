// Carolina
import felicidad from "../assets/img/felicidad.webp";
import moneyball from "../assets/img/moneyball.webp";
import imitacion from "../assets/img/imitacion.webp";

// Gabriela
import doss from "../assets/img/doss.jpg";
import palais from "../assets/img/palais.jpg";
import intime from "../assets/img/intime.jpg";

// Leandro
import comunidad from "../assets/img/comunidad-del-anillo.webp";
import dosTorres from "../assets/img/las-dos-torres.webp";
import retornoRey from "../assets/img/el-retorno-del-rey.webp";

// Leonardo
import enemigo from "../assets/img/enemigo.jpg";
import matrix from "../assets/img/matrix.jpg";
import tropa from "../assets/img/tropa.jpg";

// Manuel
import piePequeno from "../assets/img/pie-pequeño.webp";
import juegosDelHambre from "../assets/img/juegos-del-hambre-sinsajo.webp";
// Nota: Manuel también tiene 'El retorno del rey'

const diccionarioImagenesPeliculas = {
  carolina: {
    1: felicidad,
    2: moneyball,
    3: imitacion,
  },
  gabriela: {
    1: doss,
    2: palais,
    3: intime,
  },
  leandro: {
    1: comunidad,
    2: dosTorres,
    3: retornoRey,
  },
  leonardo: {
    1: enemigo,
    2: matrix,
    3: tropa,
  },
  manuel: {
    1: piePequeno,
    2: juegosDelHambre,
    3: retornoRey,
  },
};

export const obtenerImagenPelicula = (idIntegrante, idPelicula) => {
  return diccionarioImagenesPeliculas[idIntegrante.toLowerCase()]?.[idPelicula] || null;
}