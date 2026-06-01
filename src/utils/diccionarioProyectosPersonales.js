// mapaProyectosPersonales.js

// Carolina
import felicidad from "../assets/img/felicidad.webp";
import moneyball from "../assets/img/moneyball.webp";
import imitacion from "../assets/img/imitacion.webp";

// Gabriela
import promel1 from "../assets/img/promel1.png";
import promel2 from "../assets/img/promel2.png";
import promel3 from "../assets/img/promel3.jpg";

// Leandro
import spaceWars from "../assets/img/spacewars.png";
import escabioInterplanetario from "../assets/img/escabio-interplanetario.png";
import configuracionesManuales from "../assets/img/configuraciones-manuales.png";

// Leonardo
import estereos from "../assets/img/estereosenlanube.png";
import learn from "../assets/img/learnwithme.png";
import reparame from "../assets/img/reparame.png";

// Manuel
import dashboardPyme from "../assets/img/dashboard-pyme.png";
import ecobudgetPro from "../assets/img/ecobudget-pro.jpg";
import automatizadorReportes from "../assets/img/automatizador-de-reportes.avif";

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
      titulo: "Vigilus 360",
      descripcion: "Evaluación operativa de protocolos de seguridad y gestión de contingencias bajo escenarios de alta presión.",
      img: promel1
    },
    2: {
      titulo: "Unit-X",
      descripcion: "Modelado de arquitectura iterativa y desarrollo incremental estructurado de forma unitaria.",
      img: promel2
    },
    3: {
      titulo: "Cronos",
      descripcion: "Análisis computacional del tiempo como recurso crítico y optimización de flujos transaccionales.",
      img: promel3
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
      titulo: "EnemEstereos en la nube",
      descripcion: "Nuestra Web Stereosenlanube ofrece una plataforma integral a músicos independientes promocionar su música y eventos, abordando la creciente necesidad de conectar los nuevos talentos a una audiencia más global.",
      img: estereos
    },
    2: {
      titulo: "learn-with-me",
      descripcion: "Es una plataforma de estudio web donde podrás aprender tecnologías clave que están siendo muy demandadas en la actualidad",
      img: learn
    },
    3: {
      titulo: "ReparameApp",
      descripcion: "Reparame es una aplicación que conecta a prestadores de servicios confiables con clientes en tiempo real, ofreciendo soluciones rápidas a problemas del hogar.",
      img: reparame
    },
  },
    manuel: {
    1: {
      titulo: "Dashboard PyME",
      descripcion:
        "Proyecto conceptual de dashboard interactivo para la visualización de ventas, costos e indicadores empresariales.",
      img: dashboardPyme,
    },
    2: {
      titulo: "EcoBudget Pro",
      descripcion:
        "Prototipo en desarrollo de una aplicación para la gestión y optimización de presupuestos personales.",
      img: ecobudgetPro,
    },
    3: {
      titulo: "Automatizador de Reportes",
      descripcion:
        "Idea de herramienta para procesar datos y generar informes financieros de forma automática.",
      img: automatizadorReportes,
    },
  },
};

export const obtenerProyectosPersonales = (idIntegrante) => {
  return diccionarioProyectosPersonales[idIntegrante.toLowerCase()] || null;
}

export const obtenerTodosLosProyectos = () => {
  return Object.values(diccionarioProyectosPersonales).flatMap((proyectosIntegrante) =>
    Object.values(proyectosIntegrante)
  );
};