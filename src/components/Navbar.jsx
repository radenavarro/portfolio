import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar = (props) => {

  return (
    <div className={'navbar'}>
      <Link className={'navbar-item'} to={'/'}>Inicio</Link>
      <Link className={'navbar-item'} to={'/habilidades'}>Habilidades</Link>
      <Link className={'navbar-item'} to={'/proyectos'}>Proyectos</Link>
      <Link className={'navbar-item'} to={'/contacto'}>Contacto</Link>
    </div>
  )
}

export default Navbar;
