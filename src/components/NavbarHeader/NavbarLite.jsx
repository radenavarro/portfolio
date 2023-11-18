import React from "react";
import "./NavbarLite.scss";
import {Link} from "react-router-dom";
import {FaGithub, FaGoogle} from "react-icons/fa6";
import Hamburguer from "../hamburguer/Hamburguer";

const NavbarLite = (props) => {

  return (
    <nav className={'navbar-lite'}>
      <section className={'navbar-title'}>
        <strong>PORTAFOLIO</strong>
      </section>
      <Hamburguer/>
      <section className={'navbar-links'}>
        <Link className={'navbar-item'} to={'/'}>Inicio</Link>
        <Link className={'navbar-item'} to={'/habilidades'}>Habilidades</Link>
        <Link className={'navbar-item'} to={'/proyectos'}>Proyectos</Link>
        <Link className={'navbar-item'} to={'/contacto'}>Contacto</Link>
      </section>
      <section className={'navbar-social'}>
        <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
          <FaGoogle className={'icon'}/>
        </a>
        <a href={import.meta.env.VITE_GITHUB} target={'_blank'} rel={'noopener noreferrer'}>
          <FaGithub className={'icon'}/>
        </a>
      </section>
    </nav>
  )
}

export default NavbarLite;
