import React from "react";
import "./Proyectos.scss";
import Proyecto from "../../components/Proyecto";
import DevIcon from "../../components/style/DevIcon";

const Proyectos = (props) => {

  return (
    <article className={'proyectos'}>
      <h2>PROYECTOS</h2>
      <h3>LABORALES</h3>
      <section className={'proyectos-list'}>
        <Proyecto
          year={"2019-2023"}
          header={"No problem cooking"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
            <DevIcon key={"php"} name={"devicon-php-plain"}/>,
            <DevIcon key={"mysql"} name={"devicon-mysql-plain"}/>,
          ]}
        >
          <p>
            ERP orientado inicialmente a comedores escolares, y posteriormente adaptado a otros ámbitos como hospitales o
            cocinas centrales. El frontend está desarrollado con React (Javascript), y el backend en Laravel (PHP). He sido
            el principal desarrollador tanto en frontend como en backend.
          </p>
        </Proyecto>
        <Proyecto
          year={"2023"}
          header={"Ventas"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            App hecha con React Native orientada a ventas, tanto en efectivo como con tarjeta o mediante albarán previa firma.
          </p>
        </Proyecto>
        <Proyecto
          year={"2023"}
          header={"No problem PDA almacén"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            App hecha con React Native orientada a gestión de almacén para hacer compras, ventas o inventarios de productos
            manualmente o mediante lectura de código de barras. La app se sincroniza con un backend hecho en Delphi.
          </p>
        </Proyecto>
      </section>
      <h3>PERSONALES</h3>
      <section className={'proyectos-list'}>
        <Proyecto
          year={2023}
          header={"Resultados"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            Pequeña app que se conecta con diversas API rest deportivas gratuítas y muestra resultados y clasificaciones
            de varias competiciones.
          </p>
        </Proyecto>
        <Proyecto
          year={2023}
          header={"Parallax"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            Componente hecho con React que genera un efecto de paralaje o parallax en el fondo.
          </p>
        </Proyecto>
        <Proyecto
          year={2023}
          header={"WYSIWYG - React"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            Componente de React que añade un campo de texto en el que se puede escribir y, después de un tiempo, en caso
            de que en el texto que se haya escrito se encuentren determinados patrones, esas porciones de texto se sustituirán
            por emotes.
          </p>
        </Proyecto>
        <Proyecto
          year={2022}
          header={"RPG Maker character creator"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
          ]}
        >
          <p>
            Un simple generador de caras de personajes para RPG Maker, hecho con React. Los personajes se pueden descargar
            y se guardan en una base de datos interna con <strong>PouchDB</strong>.
          </p>
        </Proyecto>
        <Proyecto
          year={2020}
          header={"BB Player spoilerer"}
          icons={[
            <DevIcon key={"html5"} name={"devicon-html5-plain"}/>,
            <DevIcon key={"css3"} name={"devicon-css3-plain"}/>,
            <DevIcon key={"js"} name={"devicon-javascript-plain"}/>,
            <DevIcon key={"mysql"} name={"devicon-mysql-plain"}/>,
          ]}
        >
          <p>
            App con frontend hecho con React y backend hecho con Express, que consiste en una base de datos actualizable de
            jugadores del juego online <a href="https://buzzerbeater.com">Buzzerbeater</a>, la cual se actualiza haciendo
            copiar/pegar directamente desde la lista de transferencias, y mediante empleo de expresiones regulares, esta
            información se traduce para que pueda añadirse.
          </p>
        </Proyecto>
      </section>
    </article>
  )
}

export default Proyectos;
