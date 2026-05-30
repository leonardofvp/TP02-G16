import React from "react";
import BotonEnlace from "../components/ui/Botones/BotonEnlace";
import TarjetaIntegrante from "../components/ui/Tarjetas/TarjetaIntegrante";
import styles from "./Home.module.css";
import integrantesData from "../data/IntegrantesData.json";
import { obtenerAvatar } from "../utils/diccionarioAvatares";

function Home() {
  return (
    <section>
      <h2>Equipo de Trabajo</h2>
      <div className={styles.equipoGrid}>
        {integrantesData.map((integrante) => (
          <TarjetaIntegrante
            key={integrante.id}
            avatar={obtenerAvatar(integrante.id)}
            avatarTextoAlternativo={integrante.nombre}
            nombre={integrante.nombre}
            destino={`/perfil/${integrante.id}`}
            texto="Ver perfil"
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
