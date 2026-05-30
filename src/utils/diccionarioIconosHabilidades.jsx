import React from "react";
// Colecciones: fa (FontAwesome), si (SimpleIcons), md (MaterialDesign), tb (Tabler Icons)
import {
  FaBrain,
  FaRunning,
  FaUsers,
  FaChartLine,
  FaChalkboardTeacher,
  FaServer,
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaBug,
  FaCode,
  FaTerminal,
  FaJava,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiUnity,
  SiKotlin,
  SiPython,
  SiPhp,
  SiSpringboot,
  SiMysql,
  SiR,
} from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb"; // <-- Importación estable desde tabler icons

const diccionarioIconosHabilidd = {
  carolina: {
    1: <FaBrain />,
    2: <FaRunning />,
    3: <FaUsers />,
    4: <FaChartLine />,
    5: <FaChalkboardTeacher />,
  },
  gabriela: {
    1: <MdOutlineScience />,
    2: <FaShieldAlt />,
    3: <FaServer />,
    4: <FaLock />,
    5: <FaDatabase />,
  },
  leandro: {
    1: <TbBrandCSharp />, // <-- Ícono actualizado
    2: <SiUnity />,
    3: <SiPhp />,
    4: <FaBug />,
    5: <SiKotlin />,
  },
  leonardo: {
    1: <FaTerminal />,
    2: <FaJava />,
    3: <SiSpringboot />,
    4: <SiMysql />,
  },
  manuel: {
    1: <SiPython />,
    2: <SiR />,
    3: <FaHtml5 />,
    4: <FaJs />,
  },
};

export const obtenerIconoHabilidad = (idIntegrante, idHabilidad) => {
  return diccionarioIconosHabilidd[idIntegrante.toLowerCase()]?.[idHabilidad] || <FaCode />;
};
