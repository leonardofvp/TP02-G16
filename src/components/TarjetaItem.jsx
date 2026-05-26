import React, { useState } from 'react';

export default function TarjetaItem({ titulo, imagen, children }) {
const [mostrarDetalles, setMostrarDetalles] = useState(false);

return (
    <article className="tarjeta-item">
        {imagen && (
            <div className="avatar-container">
            <img src={imagen} alt={`Portada de ${titulo}`} />
            </div>
        )}

        <h3>{titulo}</h3>

        <div className={`detalle-tarjeta ${mostrarDetalles ? 'activo' : ''}`}>
            {children}
        </div>

        <button
            className="boton-detalles"
            onClick={() => setMostrarDetalles(!mostrarDetalles)}
        >
            {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
    </article>
);
}