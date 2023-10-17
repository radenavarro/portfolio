import "./Introduccion.scss";
import {FaHandPointRight} from "react-icons/fa6";

const Introduccion = (props) => {

  return (
    <article className={'introduccion'}>
      <div className={'introduccion-imagen'}></div>
      <section className={'introduccion-texto'}>
        <h2>BIENVENID@</h2>
        <p>
          Soy un programador web titulado en el ciclo superior de Desarrollo de
          Aplicaciones Web <em>(DAW)</em> en el año 2016, aunque la programación lleva siendo un hobby para mí desde
          bastante tiempo antes.
          Mis conocimientos abarcan diversos lenguajes de programación, siendo Javascript y PHP los que mejor conozco; pero también
          otros como Java. También cuento con algo de experiencia en hardware, reparación de PCs,
          periféricos y redes, y me manejo bien con herramientas de diseño gráfico como Photoshop o Gimp.
        </p>
        {/*<div className={'button'}><span>Echa un vistazo a mi trabajo</span>&emsp;<FaHandPointRight/></div>*/}
        <button className={'button'}>Echa un vistazo a mi trabajo&emsp;<FaHandPointRight/></button>
      </section>
    </article>
  )
}

export default Introduccion;
