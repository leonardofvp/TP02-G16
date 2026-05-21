import React from 'react'
import BotonEnlace from '../components/ui/Botones/BotonEnlace'

function Equipo() {
    return (
            <section id="integrantes" className="section-main">
            <h2>Equipo de Trabajo</h2>
            <div className="equipo-grid">
                <article className="tarjeta-item">
                    <div className="avatar-container">
                        <img src="img/leandro-avatar.jpg" alt="Leandro Raúl Ferrero"/>
                    </div>
                    <h3>Leandro Raúl Ferrero</h3>
                    <BotonEnlace destino='/equipo/perfil' texto='Ver equipo'/>
                </article>

                <article className="tarjeta-item">
                    <div className="avatar-container">
                        <img src="img/caro.png" alt="Carolina Corradi"/>
                    </div>
                    <h3>Carolina Corradi</h3>
                    <BotonEnlace destino='/equipo/perfil' texto='Ver equipo'/>
                </article>

                <article className="tarjeta-item">
                    <div className="avatar-container">
                        <img src="img/manu.png" alt="Manuel Espíndola"/>
                    </div>
                    <h3>Manuel Espíndola</h3>
                    <BotonEnlace destino='/equipo/perfil' texto='Ver equipo'/>
                </article>

                <article className="tarjeta-item">
                    <div className="avatar-container">
                        <img src="img/melinya-avatar.jpg" alt="Melinya Byte"/>
                    </div>
                    <h3>Gabriela Gonzalez</h3>
                    <BotonEnlace destino='/equipo/gabriela' texto='Ver perfil'/>
                </article>

                <article className="tarjeta-item">
                    <div className="avatar-container">
                        <img src="img/leo.png" alt="Leonardo Vargas"/>
                    </div>
                    <h3>Leonardo Vargas</h3>
                    <BotonEnlace destino='/equipo/perfil' texto='Ver equipo'/>
                </article>
            </div>
        </section>
    )
}

export default Equipo