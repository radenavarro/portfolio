import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar = (props) => {

  return (
    <nav className={'navbar'}>
      <Link className={'navbar-item'} to={'/'}>Inicio</Link>
      <Link className={'navbar-item'} to={'/habilidades'}>Habilidades</Link>
      <Link className={'navbar-item'} to={'/proyectos'}>Proyectos</Link>
      <Link className={'navbar-item'} to={'/contacto'}>Contacto</Link>
    </nav>
  )
}

export default Navbar;
