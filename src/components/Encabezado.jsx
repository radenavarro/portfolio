import "./Encabezado.scss";

const Encabezado = (props) => {

  return (
    <div className={'encabezado'}>
      <div className={'encabezado-first'}>
        <h1>Raúl De la Paz Navarro</h1>
        <h2>Desarrollador web Full Stack</h2>
      </div>
      <div className={'encabezado-second'}>
        <p>
          Soy un programador web titulado en el ciclo superior de Desarrollo de
          Aplicaciones Web <em>(DAW)</em> en el año 2016, aunque la programación lleva siendo un hobby para mí desde
          bastante tiempo antes.
          Mis conocimientos abarcan diversos lenguajes de programación, siendo Javascript y PHP los que mejor conozco; pero también
          otros como Java. También cuento con algo de experiencia en hardware, reparación de PCs,
          periféricos y redes, y me manejo bien con herramientas de diseño gráfico como Photoshop o Gimp.
        </p>
      </div>
    </div>
  )
}

export default Encabezado;
