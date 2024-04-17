import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import "./Encabezado.scss";
import TimedToggleClass from "../style/TimedToggleClass";

const Encabezado = (props) => {

  return (
    <header className={'encabezado'}>
      {/*<OpenToWork/>*/}
      <article className={'encabezado-titulo'}>
        <section className={'encabezado-social'}>
          <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
            <FaGoogle className={'icon'}/>
          </a>
          <a href={import.meta.env.VITE_GITHUB} target={'_blank'} rel={'noopener noreferrer'}>
            <FaGithub className={'icon'}/>
          </a>
        </section>
        <section className={'encabezado-headers'}>
          <div className={'skew330'}>
            <h1>
              <TimedToggleClass timeTillToggle={5000} defaultClass={''} swapClass={'blink'} swapClassMilliseconds={200}>
                Raúl De la Paz Navarro
              </TimedToggleClass>
            </h1>
          </div>
          <div className={'skew330 pb1'}>
            <h4>Desarrollador web Full Stack</h4>
          </div>
        </section>
      </article>
    </header>
  )
}

export default Encabezado;
