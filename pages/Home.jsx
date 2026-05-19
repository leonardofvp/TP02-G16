import React from 'react';
import MemberCard from '../components/MemberCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  // Array de integrantes 
  const teamMembers = [
    { id: 1, name: "Leandro Raúl Ferrero", avatar: "img/leandro-avatar.jpg", path: "/leandro" },
    { id: 2, name: "Carolina Corradi", avatar: "img/caro.png", path: "/caro" },
    { id: 3, name: "Manuel Espíndola", avatar: "img/manu.png", path: "/manuel" },
    { id: 4, name: "Gabriela Gonzalez", avatar: "img/melinya-avatar.jpg", path: "/gabriela" },
    { id: 5, name: "Leonardo Vargas", avatar: "img/leo.png", path: "/leonardo" }
  ];

  // Array de proyectos
  const pastProjects = [
    {
      id: 1,
      title: "Club Deportivo Orion - Versión escritorio",
      description: "Sistema integral de gestión de socios, cobro de cuotas y administración de actividades deportivas.",
      tech: "C# / .NET / MySQL"
    },
    {
      id: 2,
      title: "Club Deportivo Orion - Versión movil",
      description: "Adaptación del Club Deportivo Orión para dispositivos móviles.",
      tech: "Kotlin / Android Studio"
    },
    {
      id: 3,
      title: "Clínica SePrice",
      description: "Prototipo integral de gestión hospitalaria y administración de turnos.",
      tech: "C# / .NET / MySQL / Figma"
    }
  ];

  return (
    <main id="main" className="container">
      <section id="presentacion" className="section-main">
        <h1>Equipo Orión</h1>
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un equipo interdisciplinario de estudiantes de la <strong>Superior en Desarrollo de Software</strong> en el IFTS N.° 29. 
          Nuestra formación nos permite abordar proyectos desde una perspectiva integral, donde la disciplina técnica se encuentra con la innovación constante.
        </p>
        <p>
          El nombre <strong>Orión</strong> nace de nuestra visión: al igual que la constelación, 
          buscamos ser una referencia clara y organizada en el vasto universo del desarrollo.
        </p>
        <p>
          Este proyecto representa nuestra primera etapa en el mundo del desarrollo web profesional. A través de él, 
          no solo demostramos nuestras habilidades técnicas con <strong>JavaScript, HTML, CSS</strong> y el manejo de herramientas como <strong>Git y Vercel</strong>, 
          sino también nuestra capacidad de trabajo colaborativo, resolución de problemas y compromiso con la calidad del código.
        </p>
      </section>

      {/* Sección Equipo */}
      <section id="integrantes" className="className-main">
        <h2>Equipo de Trabajo</h2>
        <div className="equipo-grid">
          {teamMembers.map(member => (
            <MemberCard 
              key={member.id}
              name={member.name}
              avatar={member.avatar}
              profilePath={member.path}
            />
          ))}
        </div>
      </section>

      {/* Sección Metodología */}
      <section id="metodologia" className="section-main">
        <h2>Cómo trabajamos</h2>
        <div className="metodologia-grid">
          <article className="tarjeta-item">
            <h3>Innovación</h3>
            <p>Buscamos soluciones creativas a problemas técnicos complejos.</p>
          </article>
          <article className="tarjeta-item">
            <h3>Calidad</h3>
            <p>Aplicamos buenas prácticas de código y diseño responsivo.</p>
          </article>
          <article className="tarjeta-item">
            <h3>Sinergia</h3>
            <p>Potenciamos nuestras habilidades individuales en cada proyecto grupal.</p>
          </article>
        </div>
      </section>

      {/* Sección Stack Tecnológico */}
      <section id="tecnologias" className="section-main">
        <h2>Stack Tecnológico</h2>
        <p>Para el desarrollo de este proyecto, hemos integrado herramientas modernas que garantizan un flujo de trabajo profesional y eficiente:</p>
        <div className="proyectos-grid">
          <article className="tarjeta-item">
            <h3>Desarrollo Frontend</h3>
            <p>Implementación de maquetado semántico con HTML5, estilos avanzados con CSS3 (Flexbox/Variables) y lógica dinámica con JavaScript puro.</p>
          </article>
          <article className="tarjeta-item">
            <h3>Asistencia y Optimización</h3>
            <p>Uso de Inteligencia Artificial (Gemini Pro y ChatGPT) para la generación de recursos gráficos, optimización de algoritmos y asistencia técnica en la resolución de problemas de maquetado.</p>
          </article>
          <article className="tarjeta-item">
            <h3>Despliegue y Control</h3>
            <p>Gestión de versiones mediante Git/GitHub para el trabajo colaborativo y despliegue continuo a través de la plataforma Vercel.</p>
          </article>
        </div>
      </section>

      {/* Sección Trayectoria */}
      <section id="proyectos-anteriores" className="section-main">
        <h2>Trayectoria del Equipo Orión</h2>
        <p>Previamente a este tarjeta web, nuestro equipo ha colaborado con éxito en:</p>
        <div className="proyectos-grid">
          {pastProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              hasDetailsButton={true}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
