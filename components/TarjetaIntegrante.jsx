import React from 'react';
import { Link } from 'react-router-dom';

const TarjetaIntegrante = ({ name, avatar, profilePath }) => {
  return (
    <article className="tarjeta-item">
      <div className="avatar-container">
        <img src={avatar} alt={name} />
      </div>
      <h3>{name}</h3>
      <Link to={profilePath} className="btn-perfil">
        Ver Perfil
      </Link>
    </article>
  );
};

export default TarjetaIntegrante;
