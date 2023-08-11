import { FaGoogle, FaGithub } from "react-icons/fa6";
import "./Encabezado.scss";
import OpenToWork from "./OpenToWork";
import MakeItBlink from "./style/MakeItBlink";

const Encabezado = (props) => {

  return (
    <div className={'encabezado'}>
      {/*<OpenToWork/>*/}
      <div className={'encabezado-titulo'}>
        <div className={'encabezado-social'}>
          <FaGoogle className={'icon'}/><FaGithub className={'icon'}/>
        </div>
        <div className={'encabezado-headers'}>
          <div className={'skew330'}>
            <h1><MakeItBlink timeTillBlink={5000}>Raúl De la Paz Navarro</MakeItBlink></h1>
          </div>
          <div className={'skew330'}>
            <h4>Desarrollador web Full Stack</h4>
          </div>
        </div>
      </div>
      {/*<div className={'encabezado-second'}>*/}
      {/*  <p>*/}
      {/*    Soy un programador web titulado en el ciclo superior de Desarrollo de*/}
      {/*    Aplicaciones Web <em>(DAW)</em> en el año 2016, aunque la programación lleva siendo un hobby para mí desde*/}
      {/*    bastante tiempo antes.*/}
      {/*    Mis conocimientos abarcan diversos lenguajes de programación, siendo Javascript y PHP los que mejor conozco; pero también*/}
      {/*    otros como Java. También cuento con algo de experiencia en hardware, reparación de PCs,*/}
      {/*    periféricos y redes, y me manejo bien con herramientas de diseño gráfico como Photoshop o Gimp.*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  )
}

export default Encabezado;
