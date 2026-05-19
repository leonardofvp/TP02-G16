import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="contenedor-superior">
      <header id="header" className="header">
        <div className="contenedor-menu-hamburguesa" onClick={() => setIsOpen(!isOpen)}>
          <div className={`menu-hamburguesa ${isOpen ? 'open' : ''}`}>
            <div className="bar-ham bar-top"></div>
            <div className="bar-ham bar-mid"></div>
            <div className="bar-ham bar-bottom"></div>
          </div>
        </div>
        
      
        <Link 
          to="/" 
          style={{ display: 'inline-block', width: '7rem', height: '7rem', padding: 0, lineHeight: 0 }} 
          onClick={() => setIsOpen(false)}
        >
          <img 
            src="img/logo-orion.png" 
            alt="Logo" 
            className="logo-equipo" 
            style={{ width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover' }} 
          />
        </Link>
      </header>

      <nav id="navbar" className={`navbar ${isOpen ? 'nav-visible' : ''}`}>
        <ul className="links-navegacion">
          <li><a href="#main" className="btn-nav" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><Link to="/bitacora" className="btn-nav" onClick={() => setIsOpen(false)}>Bitácora</Link></li>
          <li><a href="#integrantes" className="btn-nav" onClick={() => setIsOpen(false)}>Equipo</a></li>
          <li><a href="#metodologia" className="btn-nav" onClick={() => setIsOpen(false)}>Metodologías</a></li>
          <li><a href="#tecnologias" className="btn-nav" onClick={() => setIsOpen(false)}>Tecnologías</a></li>
          <li><a href="#proyectos-anteriores" className="btn-nav" onClick={() => setIsOpen(false)}>Proyectos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
