import React from "react";
import BotonEnlace from "../components/ui/Botones/BotonEnlace";
import TarjetaIntegrante from "../components/ui/Tarjetas/TarjetaIntegrante";
import styles from "./Equipo.module.css";
import integrantesData from "../data/IntegrantesData.json";
import mapaAvatares from "../data/mapaAvatares";

function Equipo() {
  return (
    <section id="integrantes" className="section-main">
      <h2>Equipo de Trabajo</h2>
      <div className={styles.equipoGrid}>
        {integrantesData.map((integrante) => (
          <TarjetaIntegrante
            key={integrante.id}
            avatar={mapaAvatares[integrante.id]}
            avatarTextoAlternativo={integrante.nombre}
            nombre={integrante.nombre}
            destino={`/equipo/perfil/${integrante.id}`}
            texto="Ver perfil"
          />
        ))}
      </div>
    </section>
  );
}

export default Equipo;
