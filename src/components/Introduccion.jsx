import React, {useRef} from "react";
import "./Introduccion.scss";
import {FaHandPointRight} from "react-icons/fa6";
import Hero from "./Hero";
import {FaSmile} from "react-icons/fa";
import {useDimensions} from "../hooks/useDimensions";
import {styled} from "styled-components";

const Introduccion = (props) => {

  const textSection = useRef();
  const textSectionDimensions = useDimensions(textSection);

  // STYLED COMPONENTS
  const Background = styled.div`
    position: absolute;
    background-image: url("src/img/intro.jpg");
    width: 100%;
    background-size: cover;
    opacity: 20%;
    background-attachment: fixed;
    height: ${textSectionDimensions[1] + 24}px;
    @media (width >= 1100px) {
      height: calc(3em + ${textSectionDimensions[1]}px);
    }
  `;

  const WelcomeText = styled.section`
    position: absolute;
    width: 80%;
    margin: 0 10% 0 10%;
  `
  const AbsoluteFiller = styled.div`
    height: ${textSectionDimensions[1] + 24}px;
    @media (width >= 1100px) {
      height: calc(3em + ${textSectionDimensions[1]}px);
    }
  `

  return (
    <article className={'introduccion'}>
      <Hero/>
      <br/>
      <div>
        <Background className={'introduccion-imagen'}></Background>
        <WelcomeText className={'introduccion-texto'} ref={textSection}>
          <h2>BIENVENID@ A MI PORTAFOLIO</h2>
          <ul>
            <li>
              Soy un programador web titulado en el ciclo superior de Desarrollo de Aplicaciones Web <em>(DAW)</em>.
            </li>
            <li>
              <strong>Javascript</strong> y <strong>PHP</strong> son los lenguajes de programación que mejor conozco, mientras
              que <strong>React</strong> y <strong>Laravel</strong> son los frameworks que me resultan más familiares. También cuento
              con algo de experiencia en hardware, reparación de PCs, periféricos y redes, y me manejo bien con herramientas de
              diseño gráfico como Photoshop o Gimp.
            </li>
            <li>
              Quédate aquí si quieres saber más sobre mí o sobre mis proyectos. Si quieres ponerte en contacto conmigo a raíz
              de dicho trabajo, puedes hacerlo desde la sección de contacto o a través del enlace en la parte superior derecha <FaSmile color={"yellow"}/>.
            </li>
          </ul>
          <button className={'button'}>Echa un vistazo a mi trabajo&emsp;<FaHandPointRight/></button>
        </WelcomeText>
        <AbsoluteFiller></AbsoluteFiller>
      </div>
    </article>
  )
}

export default Introduccion;
