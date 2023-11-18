import React, {useRef, useState} from "react";
import {FaBars} from "react-icons/fa";
import {styled} from "styled-components";
import "./Hamburguer.scss";
import {Link} from "react-router-dom";

const Hamburguer = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const HamburguerMenu = styled.ul`
    visibility: ${menuVisible ? "visible" : "hidden"};
  `

  function toggleMenuShow() {
    setMenuVisible(!menuVisible);
  }

  return (
    <nav className={"hamburguer"}>
      <FaBars style={{transform: `rotate(${menuVisible ? "90deg" : "0deg"})`}} className={"hamburguer-icon clickable"} onClick={toggleMenuShow} />
      <HamburguerMenu className={"hamburguer-menu"}>
        <li><Link className={'navbar-item'} to={'/'}>Inicio</Link></li>
        <li><Link className={'navbar-item'} to={'/habilidades'}>Habilidades</Link></li>
        <li><Link className={'navbar-item'} to={'/proyectos'}>Proyectos</Link></li>
        <li><Link className={'navbar-item'} to={'/contacto'}>Contacto</Link></li>
      </HamburguerMenu>
    </nav>
  )
}

export default Hamburguer;
