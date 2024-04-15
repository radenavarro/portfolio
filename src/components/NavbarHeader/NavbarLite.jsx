import React, {useState} from "react";
import "./NavbarLite.scss";
import {Link} from "react-router-dom";
import {FaGithub, FaGoogle, FaLinkedin} from "react-icons/fa6";
import Hamburguer from "../hamburguer/Hamburguer";
import {handleSpambots} from "../../helpers/helpers";

const NavbarLite = (props) => {
  const [correo, setCorreo] = useState("")

  /**
   * Manejar spambots
   * @param e
   */
  const handleCorreoClick = (e) => {
    if (correo === "") {
      window.location.href = handleSpambots(import.meta.env.VITE_EMAIL)
    }
  }

  return (
    <nav className={'navbar-lite'} data-testid={'test-navbar-lite'}>
      <section className={'navbar-title'}>
        <strong>RADENA</strong>
      </section>
      <Hamburguer/>
      <section className={'navbar-links'}>
        <Link data-testid={'test-link-inicio'} className={'navbar-item'} to={'/'}>Inicio</Link>
        <Link data-testid={'test-link-habilidades'} className={'navbar-item'} to={'/habilidades'}>Habilidades</Link>
        <Link data-testid={'test-link-proyectos'} className={'navbar-item'} to={'/proyectos'}>Proyectos</Link>
        <Link data-testid={'test-link-contacto'} className={'navbar-item'} to={'/contacto'}>Contacto</Link>
      </section>
      <section className={'navbar-social'}>
        <a
          onMouseEnter={() => setCorreo(handleSpambots(import.meta.env.VITE_EMAIL))}
          onMouseLeave={() => setCorreo("")}
          onClick={handleCorreoClick}
          href={`mailto:${correo}`}
        >
          <FaGoogle className={'icon'}/>
        </a>
        <a href={import.meta.env.VITE_GITHUB} target={'_blank'} rel={'noopener noreferrer'}>
          <FaGithub className={'icon'}/>
        </a>
        <a href={import.meta.env.VITE_LINKEDIN} target={'_blank'} rel={'noopener noreferrer'}>
          <FaLinkedin className={'icon'}/>
        </a>
      </section>
    </nav>
  )
}

export default NavbarLite;
