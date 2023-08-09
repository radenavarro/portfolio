import "./Introduccion.scss";

const Introduccion = (props) => {

  return (
    <div className={'introduccion'}>
      <div className={'introduccion-imagen'}></div>
      <div className={'introduccion-texto'}>
        <h2>BIENVENID@</h2>
        <p>
          Soy un programador web titulado en el ciclo superior de Desarrollo de
          Aplicaciones Web <em>(DAW)</em> en el año 2016, aunque la programación lleva siendo un hobby para mí desde
          bastante tiempo antes.
          Mis conocimientos abarcan diversos lenguajes de programación, siendo Javascript y PHP los que mejor conozco; pero también
          otros como Java. También cuento con algo de experiencia en hardware, reparación de PCs,
          periféricos y redes, y me manejo bien con herramientas de diseño gráfico como Photoshop o Gimp.
        </p>
        <div className={'button'}>Echa un vistazo a mi trabajo</div>
      </div>
    </div>
  )
}

export default Introduccion;
