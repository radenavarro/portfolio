import React from "react";
import Introduccion from "../../components/Introduccion";
import "./Inicio.scss";
import SobreMi from "../../components/Inicio/SobreMi";

const Inicio = (props) => {

  return (
    <>
      <article className={'inicio'}>
        <Introduccion/>
      </article>
      <article className={'sobre-mi'}>
        <SobreMi/>
      </article>
    </>
  )
}

export default Inicio;
