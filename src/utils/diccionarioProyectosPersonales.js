// mapaProyectosPersonales.js

// Carolina
import felicidad from "../assets/img/felicidad.webp";
import moneyball from "../assets/img/moneyball.webp";
import imitacion from "../assets/img/imitacion.webp";

// Gabriela
import doss from "../assets/img/promel3.png";
import palais from "../assets/img/promel1.png";
import intime from "../assets/img/promel2.jpg";

// Leandro
import spaceWars from "../assets/img/spacewars.png"
import escabioInterplanetario from "../assets/img/escabio-interplanetario.png";
import configuracionesManuales from "../assets/img/configuraciones-manuales.png";

// Leonardo
import enemigo from "../assets/img/enemigo.jpg";
import matrix from "../assets/img/matrix.jpg";
import tropa from "../assets/img/tropa.jpg";

// Manuel
import piePequeno from "../assets/img/pie-pequeño.webp";
import juegosDelHambre from "../assets/img/juegos-del-hambre-sinsajo.webp";
import retornoRey from "../assets/img/el-retorno-del-rey.webp";

const diccionarioProyectosPersonales = {
  carolina: {
    1: {
      titulo: "En busca de la felicidad",
      descripcion: "Análisis estratégico sobre la resiliencia operativa frente a entornos cambiantes y críticos.",
      img: felicidad
    },
    2: {
      titulo: "Moneyball",
      descripcion: "Implementación de modelos analíticos y optimización de datos estadísticos para la toma de decisiones.",
      img: moneyball
    },
    3: {
      titulo: "El juego de la imitación",
      descripcion: "Estudio del procesamiento de datos, lógica algorítmica fundamental y criptografía histórica.",
      img: imitacion
    },
  },
  gabriela: {
    1: {
      titulo: "Hasta el último hombre",
      descripcion: "Evaluación operativa de protocolos de seguridad y gestión de contingencias bajo escenarios de alta presión.",
      img: doss
    },
    2: {
      titulo: "Le Palais Idéal du Facteur Cheval",
      descripcion: "Modelado de arquitectura iterativa y desarrollo incremental estructurado de forma unitaria.",
      img: palais
    },
    3: {
      titulo: "In time",
      descripcion: "Análisis computacional del tiempo como recurso crítico y optimización de flujos transaccionales.",
      img: intime
    },
  },
  leandro: {
    1: {
      titulo: "Spacewars",
      descripcion: "Proyecto hecho en Unity 2D. Juego de PC estilo Vampire Survivors pero de naves espaciales",
      img: spaceWars
    },
    2: {
      titulo: "Escabio interplanetario",
      descripcion: "Proyecto hecho en Unity 3D. Juego de PC de tematica collectathon donde un marciano tiene que juntar botellas de vino",
      img: escabioInterplanetario
    },
    3: {
      titulo: "Configuraciones Manuales",
      descripcion: "Proyecto desarrollado en Godot. Aplicación móvil diseñada para ayudar en el aprendizaje de la lengua de señas.",
      img: configuracionesManuales
    },
  },
  leonardo: {
    1: {
      titulo: "Enemigo al acecho",
      descripcion: "Optimización de consultas de alta precisión y análisis predictivo de rendimiento en servidores aislados.",
      img: enemigo
    },
    2: {
      titulo: "Matrix",
      descripcion: "Modelado de entornos lógicos virtuales y abstracción de capas para el control de flujos de ejecución.",
      img: matrix
    },
    3: {
      titulo: "Tropa de élite",
      descripcion: "Implementación de auditorías estrictas de hardening y ejecución de scripts de seguridad en sistemas operativos.",
      img: tropa
    },
  },
  manuel: {
    1: {
      titulo: "Pie Pequeño",
      descripcion: "Gestión de rutas lógicas, resolución de conflictos de navegación y adaptación a entornos de ejecución dinámicos.",
      img: piePequeno
    },
    2: {
      titulo: "Los juegos del hambre: Sinsajo Parte 2",
      descripcion: "Despliegue distribuido de nodos de comunicación masiva y manejo de concurrencia bajo fallos sistémicos.",
      img: juegosDelHambre
    },
    3: {
      titulo: "El retorno del rey",
      descripcion: "Despliegue final en producción, integración continua y validación exhaustiva de la lógica de negocio.",
      img: retornoRey
    },
  },
};

export const obtenerProyectosPersonales = (idIntegrante) => {
  return diccionarioProyectosPersonales[idIntegrante.toLowerCase()] || null;
}
