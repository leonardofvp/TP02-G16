import React from 'react'
import BotonEnlace from '../components/ui/Botones/BotonEnlace'
import TarjetaIntegrante from '../components/TarjetaIntegrante'
import leandroAvatar from '../assets/img/leandro-avatar.jpg'
import caroAvatar from '../assets/img/caro.png'
import manuAvatar from '../assets/img/manu.png'
import gabrielaAvatar from '../assets/img/melinya-avatar.jpg'
import leonardoAvatar from '../assets/img/leo.png'
import styles from './Equipo.module.css'

function Equipo() {
    return (
            <section id="integrantes" className="section-main">
            <h2>Equipo de Trabajo</h2>
            <div className={styles.equipoGrid}>
                <TarjetaIntegrante
                    avatar={leandroAvatar}
                    textoAlternativo='Avatar de Leandro Ferrero'
                    nombre='Leandro Ferrero'
                    destino='/equipo/perfil'
                    texto='Ver perfil'
                />

                <TarjetaIntegrante
                    avatar={caroAvatar}
                    textoAlternativo='Avatar de Carolina Corradi'
                    nombre='Carolina Corradi'
                    destino='/equipo/perfil'
                    texto='Ver perfil'
                />

                <TarjetaIntegrante
                    avatar={manuAvatar}
                    textoAlternativo='Avatar de Manuel Espíndola'
                    nombre='Manuel Espíndola'
                    destino='/equipo/perfil'
                    texto='Ver perfil'
                />

                <TarjetaIntegrante
                    avatar={gabrielaAvatar}
                    textoAlternativo='Avatar de Gabriela Gonzalez'
                    nombre='Gabriela Gonzalez'
                    destino='/equipo/gabriela'
                    texto='Ver perfil'
                />

                <TarjetaIntegrante
                    avatar={leonardoAvatar}
                    textoAlternativo='Avatar de Leonardo Vargas'
                    nombre='Leonardo Vargas'
                    destino='/equipo/perfil'
                    texto='Ver perfil'
                />
            </div>
        </section>
    )
}

export default Equipo