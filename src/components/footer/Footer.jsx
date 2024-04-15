import React, {useState} from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";
import {handleSpambots} from "../../helpers/helpers";

const Footer = (props) => {

  const [correo, setCorreo] = useState("")

  /**
   * Manejar spambots
   * @param e
   */
  const handleCorreoClick = (e) => {
    if (correo === "") {
      window.location.href = import.meta.env.VITE_EMAIL
    }
  }

  return (
    <footer className={'footer'} data-testid={'test-footer'}>
      <section className={'footer-blocks'}>
        <section className={'footer-subsection'}>
          <small>SECCIONES</small>
          <Link to={'/'}><small>Inicio</small></Link>
          <Link to={'/habilidades'}><small>Habilidades</small></Link>
          <Link to={'/proyectos'}><small>Proyectos</small></Link>
          <Link to={'/contacto'}><small>Contacto</small></Link>
        </section>
        <section className={'footer-subsection'}>
          <small>REDES</small>
          <a href={import.meta.env.VITE_GITHUB}><small>Github</small></a>
          <a href={import.meta.env.VITE_LINKEDIN}><small>LinkedIn</small></a>
          <a
            onMouseEnter={() => setCorreo(handleSpambots(import.meta.env.VITE_EMAIL))}
            onMouseLeave={() => setCorreo("")}
            onClick={handleCorreoClick}
            href={`mailto:${correo}`}>
            <small>Google</small>
          </a>
        </section>
      </section>

      <section className={'footer-author'}>
        <small>Raúl De la Paz Navarro - 2024</small>
      </section>
    </footer>
  )
}

export default Footer;
