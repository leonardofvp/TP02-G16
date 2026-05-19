import React, { useState } from 'react';

const TarjetaProyecto = ({ title, description, tech, hasDetailsButton }) => {
  const [expandido, setExpandido] = useState(false);

  return (
    <article className="tarjeta-item">
      <h3>{title}</h3>
      
      <div className={`detalle-tarjeta ${expandido ? 'activo' : ''}`}>
        <p>{description}</p>
        <small>Tecnologías: {tech}</small>
      </div>

      {/* 3. El botón alterna el estado entre true y false al hacer clic */}
      {hasDetailsButton && (
        <button 
          className="boton-detalles" 
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      )}
    </article>
  );
};

export default TarjetaProyecto;
