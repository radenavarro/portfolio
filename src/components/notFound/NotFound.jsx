import {Link} from "react-router-dom";
import React from "react";
import "./NotFound.scss";
const notFoundImage = "src/img/notFound.webp";

const NotFound = () => {
  return (
    <div className={'not-found'} style={{backgroundImage: "url("+notFoundImage+")"}}>
      <section>
        <h1>¡UPS! 404</h1>
        <h3>La ruta no existe</h3>
        <Link to={'/'}>VOLVER A HOME</Link>
      </section>
    </div>
  )
}

export default NotFound;
