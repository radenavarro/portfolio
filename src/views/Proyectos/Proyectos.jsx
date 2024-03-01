import React, {useState} from "react";
import "./Proyectos.scss";
import Proyecto from "../../components/Proyecto";
import DevIcon from "../../components/style/DevIcon";

const Proyectos = (props) => {
  const factors = {
    default: "defecto",
    relevance: "relevancia"
  }
  const [sortFactor, setSortFactor] = useState(factors.default)
  const [sortFactorPersonal, setSortFactorPersonal] = useState(factors.default)
  const images = {
    npcook : [{
      src: "https://noproblem.es/wp-content/uploads/2020/09/no-problem-cooking-desde-cualquier-dispotivos-2-e1600673230394.jpg",
      alt: "Imagen No problem cooking"
    }],
    listacompra: [
      {
        src: "./src/img/proyectos/lista_compra.webp",
        alt: "Imagen Lista de la compra"
      }
    ],
    resultados: [
      {
        src: "./src/img/proyectos/resultados.png",
        alt: "Imagen Resultados"
      }
    ]
  };

  const links = {
    listacompra: [
      {
        icon: <DevIcon key={"github"} name={"devicon-github-original"}/>,
        src: "https://github.com/radenavarro/listacompra"
      }
    ],
    resultados: [
      {
        icon: <DevIcon key={"github"} name={"devicon-github-original"}/>,
        src: "https://github.com/radenavarro/resultados"
      }
    ],
    parallax: [
      {
        icon: <DevIcon key={"github"} name={"devicon-github-original"}/>,
        src: "https://github.com/radenavarro/parallax"
      }
    ],
    wysiwyg: [
      {
        icon: <DevIcon key={"github"} name={"devicon-github-original"}/>,
        src: "https://github.com/radenavarro/wysiwyg-react"
      }
    ],
    rpgMakerCharEditor: [
      {
        icon: <DevIcon key={"github"} name={"devicon-github-original"}/>,
        src: "https://github.com/radenavarro/rpgmaker-char-editor"
      }
    ]
  }

  const proyectos = {
    laborales: [
      {
        relevancia: 10,
        html: (
          <Proyecto
            year={"2019-2023"}
            header={"No problem cooking"}
            relevance={10}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"laravel"} name={"devicon-laravel-plain"} title={"Laravel"}/>,
              <DevIcon key={"mysql"} name={"devicon-mysql-plain"} title={"MySQL"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
              <DevIcon key={"docker"} name={"devicon-docker-plain"} title={"Docker"}/>,
            ]}
            screens={images.npcook}
            videos={[
              "https://www.youtube.com/playlist?list=PLw2WnExdxUAY5DEp3EDOMJfybksmsp_dk"
            ]}
          >
            <p>
              <a
                href={"https://es.wikipedia.org/wiki/Sistema_de_planificaci%C3%B3n_de_recursos_empresariales"}>ERP</a> orientado
              inicialmente
              a comedores escolares, y posteriormente adaptado a otros ámbitos como hospitales o cocinas centrales. El
              frontend
              está desarrollado con <a href={"https://es.react.dev/"}>React</a> (Javascript), y el backend en <a
              href={"https://laravel.com/"}>Laravel</a> (PHP).
            </p>
            <p>
              Dicho <a
              href={"https://es.wikipedia.org/wiki/Sistema_de_planificaci%C3%B3n_de_recursos_empresariales"}>ERP</a> permite,
              además
              de control de stock, <strong>planificación de menús</strong> tanto semanal como mensual teniendo en cuenta
              posibles
              alérgenos e intolerancias de comensales, <strong>sincronización con Prestashop</strong> y descarga de
              pedidos de clientes
              desde el mismo, <strong>creación de albaranes</strong> tanto de compra como de venta para recepcionar o
              dar salida a
              productos, <strong>gestión de usuarios</strong> con permisos, <strong>impresión de menús
              personalizada</strong>, entre otras
              muchas funcionalidades.
            </p>
            <p>
              La app se despliega en varios contenedores de <a href={"https://www.docker.com/"}>Docker</a>: 1 para el
              frontend, 1 para el
              backend, y 1 para el <a href="https://www.nginx.com/">Nginx</a>. Dichos contenedores se encuentran
              desplegados en una
              instancia de <a href={"https://aws.amazon.com/es/"}>AWS</a>
            </p>
            <p>
              He sido el principal desarrollador tanto en frontend como en backend.
            </p>
          </Proyecto>
        )
      },
      {
        relevancia: 6,
        html: (
          <Proyecto
            year={"2023"}
            header={"No problem PDA almacén"}
            relevance={6}
            icons={[
              <DevIcon key={"android"} name={"devicon-android-plain"} title={"Android"}/>,
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"js"} name={"devicon-javascript-plain"} title={"JavaScript"}/>,
            ]}
            videos={[
              "https://www.youtube.com/watch?v=AuXK77gEvtk"
            ]}
          >
            <>
              <p>
                App hecha con <a href={"https://reactnative.dev/"}>React Native</a> pensada
                para <strong>PDA</strong> con <strong>lector
                de códigos de barras</strong> y orientada a gestión de almacén, permitiendo hacer listados de compras,
                ventas,
                inventarios de productos o salidas de stock por merma o caducidad. Dichas operaciones pueden realizarse
                manualmente
                o mediante lectura de código de barras.
              </p>
              <p>
                Además, la app <strong>puede sincronizar listados de pedidos</strong> tanto de clientes (venta) como a
                proveedores (compra) de
                un backend hecho en <strong>Delphi</strong>, pudiendo visualizar sus productos y marcarlos como
                procesados mediante escaneo de
                códigos de barras.
              </p>
              <p>
                La app usa <a href={"https://github.com/react-native-async-storage/async-storage"}>AsyncStorage</a> para
                guardar
                los listados.
              </p>
            </>
          </Proyecto>
        )
      },
      {
        relevancia: 5,
        html: (
          <Proyecto
            year={"2023"}
            header={"Ventas"}
            relevance={5}
            icons={[
              <DevIcon key={"android"} name={"devicon-android-plain"} title={"Android"}/>,
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"js"} name={"devicon-javascript-plain"} title={"JavaScript"}/>,
            ]}
          >
            <>
              <p>
                App hecha con <a href={"https://reactnative.dev/"}>React Native</a> orientada a ventas y pensada para
                usarse
                tanto en <strong>teléfono móvil</strong> como en <strong>tablet</strong> o <strong>TPV</strong>. Permite
                ventas en efectivo (calculando el cambio según la cantidad abonada por el cliente), con
                tarjeta o mediante albarán (requiriendo firma del cliente en el dispositivo), con la posibilidad en
                todos los
                casos de imprimir el ticket al final de la transacción.
              </p>
              <p>
                La app cuenta con <a
                href={"https://github.com/react-native-async-storage/async-storage"}>AsyncStorage</a> a
                modo de base de datos local, y puede sincronizar información con un backend en Delphi.
              </p>
            </>
          </Proyecto>
        )
      }
    ],
    personales: [
      {
        relevancia: 8,
        html: (
          <Proyecto
            key={'4'}
            year={2024}
            header={"Lista de la compra"}
            icons={[
              <DevIcon key={"android"} name={"devicon-android-plain"} title={"Android"}/>,
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"js"} name={"devicon-javascript-plain"} title={"JavaScript"}/>,
            ]}
            links={links.listacompra}
            screens={images.listacompra}
          >
            <>
              <p>
                App hecha con <a href={"https://reactnative.dev/"}>React Native</a> con persistencia en el estado de
                componentes
                mediante <a href={'https://zustand-demo.pmnd.rs/'}>Zustand</a> y <a
                href={"https://github.com/react-native-async-storage/async-storage"}>AsyncStorage</a>.
              </p>
              <p>
                Se trata de una app que te permite hacer una <strong>lista de la compra por voz</strong>, y también
                mediante escritura y búsqueda si así
                se prefiere. Las listas se pueden archivar, y ese proceso añade los productos de dichas listas a
                un <strong>stock interno</strong>.
              </p>
              <p>
                La app tiene <strong>tanto modo claro como modo oscuro</strong>, los cuales dependen del modo del
                teléfono.
              </p>
            </>
          </Proyecto>
        )
      },
      {
        relevancia: 7,
        html: (
          <Proyecto
            key={'5'}
            year={2023}
            header={"Resultados"}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
              <DevIcon key={"js"} name={"devicon-javascript-plain"} title={"JavaScript"}/>,
            ]}
            screens={images.resultados}
            links={links.resultados}
          >
            <>
              <p>
                Pequeña app consistente en un front hecho con <a href={"https://es.react.dev/"}>React</a>, que se
                conecta con
                diversas <strong>API rest</strong> deportivas gratuítas
                y muestra resultados y clasificaciones de varias competiciones.
              </p>
              <p>
                La app usa <a href="https://vitejs.dev/">Vite</a> como empaquetador, y por el momento sólo se comunica
                con
                la <strong>API</strong> de <a href="https://www.thesportsdb.com/free_sports_api">TheSportsDB</a>, aunque
                el plan
                es que pueda comunicarse al menos con 2 APIs más.
              </p>
              <p>
                <strong>El proyecto sigue en desarrollo</strong>.
              </p>
            </>
          </Proyecto>
        )
      },
      {
        relevancia: 3,
        html: (
          <Proyecto
            key={'6'}
            year={2023}
            header={"Parallax"}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
            ]}
            links={links.parallax}
          >
            <p>
              Componente simple hecho con <a href={"https://es.react.dev/"}>React</a> que genera un efecto de paralaje o
              parallax en el fondo.
            </p>
          </Proyecto>
        )
      },
      {
        relevancia: 4,
        html: (
          <Proyecto
            key={'7'}
            year={2023}
            header={"WYSIWYG - React"}
            relevance={4}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
            ]}
            links={links.wysiwyg}
          >
            <p>
              Componente de <a href={"https://es.react.dev/"}>React</a> que añade un campo de texto en el que se puede
              escribir y,
              después de un tiempo, en caso de que en el texto que se haya escrito se encuentren determinados patrones,
              esas porciones
              de texto se sustituirán por emotes.
            </p>
          </Proyecto>
        )
      },
      {
        relevancia: 5,
        html: (
          <Proyecto
            key={'8'}
            year={2022}
            header={"RPG Maker character editor"}
            relevance={5}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
            ]}
            links={links.rpgMakerCharEditor}
          >
            <p>
              Un simple generador de caras de personajes para <a href="https://www.rpgmakerweb.com/">RPG Maker</a>,
              hecho
              con <a href={"https://es.react.dev/"}>React</a>. Los personajes se pueden descargar y se guardan en una
              base
              de datos interna con <a href={"https://pouchdb.com/"}>PouchDB</a>.
            </p>
          </Proyecto>
        )
      },
      {
        relevancia: 7,
        html: (
          <Proyecto
            key={'9'}
            year={2020}
            header={"BB Player spoilerer"}
            relevance={7}
            icons={[
              <DevIcon key={"react"} name={"devicon-react-plain"} title={"React"}/>,
              <DevIcon key={"express"} name={"devicon-express-original"} title={"Express"}/>,
              <DevIcon key={"sass"} name={"devicon-sass-plain"} title={"Sass"}/>,
              <DevIcon key={"js"} name={"devicon-javascript-plain"} title={"JavaScript"}/>,
              <DevIcon key={"mysql"} name={"devicon-mysql-plain"} title={"MySQL"}/>,
            ]}
          >
            <p>
              App con frontend hecho con <a href={"https://es.react.dev/"}>React</a> y backend hecho con <a
              href="https://expressjs.com/es/">Express</a>,
              que consiste en una base de datos actualizable de jugadores del juego online <a
              href="https://buzzerbeater.com">Buzzerbeater</a>, la cual
              se actualiza haciendo copiar/pegar directamente desde la lista de transferencias, y mediante empleo de
              expresiones regulares, esta
              información se traduce para que pueda añadirse.
            </p>
          </Proyecto>
        )
      }
    ]
  }

  /**
   *
   * @param factor (factors.default | factors.relevance)
   * @param projects (proyectos.laborales | proyectos.personales)
   * @returns {*[]}
   */
  const sortProjectsBy = (factor, projects) => {
    let sortedProjects = [...projects]
    if (factor === factors.relevance) {
      sortedProjects = projects.sort((a, b) => b[factor] - a[factor])
    }
    return sortedProjects;
  }

  return (
    <article className={'proyectos'}>
      <h2>PROYECTOS</h2>
      <h3>LABORALES</h3>
      <section className={'proyectos-seccion-ordenar'}>
        <small>Ordenar por...</small>
        <label className={'proyectos-label-ordenar'}>
          <em><small>Fecha</small></em>
          <input type="radio" name={"laborales"} className={'proyectos-radio-ordenar'} onClick={() => setSortFactor(factors.default)} defaultChecked />
        </label>
        <label className={'proyectos-label-ordenar'}>
          <em><small>Relevancia</small></em>
          <input type="radio" name={"laborales"} className={'proyectos-radio-ordenar'} onClick={() => setSortFactor(factors.relevance)} />
        </label>
      </section>
      <section className={'proyectos-list'}>
        {sortProjectsBy(sortFactor, proyectos.laborales)?.map((proj) => proj.html)}
      </section>
      <h3>PERSONALES</h3>
      <section className={'proyectos-seccion-ordenar'}>
        <small>Ordenar por...</small>
        <label className={'proyectos-label-ordenar'}>
          <em><small>Fecha</small></em>
          <input type="radio" name={"personales"} className={'proyectos-radio-ordenar'} onClick={() => setSortFactorPersonal(factors.default)} defaultChecked />
        </label>
        <label className={'proyectos-label-ordenar'}>
          <em><small>Relevancia</small></em>
          <input type="radio" name={"personales"} className={'proyectos-radio-ordenar'} onClick={() => setSortFactorPersonal(factors.relevance)} />
        </label>
      </section>
      <section className={'proyectos-list'}>
        {sortProjectsBy(sortFactorPersonal, proyectos.personales)?.map((proj) => proj.html)}
      </section>
    </article>
  )
}

export default Proyectos;
