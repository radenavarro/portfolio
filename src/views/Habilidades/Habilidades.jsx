import React from "react";
import "./Habilidades.scss";
import SkillBlock from "../../components/SkillBlock";

const Habilidades = (props) => {

  return (
    <article className={'habilidades'} data-testid={'test-habilidades'}>
      <h2>FRAMEWORKS</h2>
      <section className={'habilidades-grupo slidefrom-left'}>
        <SkillBlock
          icon={"devicon-react-original"}
          iconSize={50}
          skillname={"REACT"}
          rating={8}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                <strong>Tengo 4 años de experiencia laboral</strong> desarrollando con <strong>React</strong>, y alrededor
                de 1 año más desarrollando por cuenta propia.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-laravel-plain"}
          iconSize={50}
          skillname={"LARAVEL"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                <strong>Cuento con 4 años de experiencia laboral con Laravel</strong>, durante los cuales desarrollé
                desde 0 la API rest de un ERP orientado a cocina.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-express-original"}
          iconSize={50}
          skillname={"EXPRESS"}
          rating={5}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                He hecho varios proyectos personales utilizando Express,
                como por ejemplo <a href={"https://github.com/radenavarro/app-viajes-2"}><strong>este</strong></a>.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-angularjs-plain"}
          iconSize={50}
          skillname={"ANGULAR"}
          rating={4}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Mi experiencia con Angular es limitada, pero no me resulta desconocido y he hecho algún proyecto personal.
                Por ejemplo, <a href={"https://github.com/radenavarro/movie-db-app"}><strong>este</strong></a>.
              </small>
            </section>
          )}
        />
      </section>
      <br/>
      <h2>LENGUAJES</h2>
      <section className={"habilidades-grupo slidefrom-right"}>
        <SkillBlock
          icon={"devicon-html5-plain"}
          iconSize={50}
          skillname={"HTML5"}
          rating={8}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Tengo <strong>4 años de experiencia laboral</strong> en los que he trabajado constantemente con HTML, y muchos más años de experiencia
                (desde el año 2013) con proyectos personales.
              </small>
              <br/><br/>
              <small>
                Aparte de los tags HTML clásicos, conozco los tags más novedosos de HTML5
                e <strong>intento aplicar una buena semántica</strong> en el marcado.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-css3-plain"}
          iconSize={50}
          skillname={"CSS3"}
          rating={8}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Cuento con <strong>amplia experiencia</strong> en el desarrollo con CSS; <strong>4 años laborales</strong>, y desde el año 2013 para proyectos
                personales, en los cuales siempre ha tenido un rol clave.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-javascript-plain"}
          iconSize={50}
          skillname={"JAVASCRIPT"}
          rating={8}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Tengo una amplia experiencia con Javascript debido sobre todo a mi experiencia con React, pero llevo usando Javascript
                en proyectos personales desde el año 2013. Estoy familiarizado con <strong>ES6</strong>.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-php-plain"}
          iconSize={50}
          skillname={"PHP"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Gran parte de mi experiencia con PHP se debe a los <strong>4 años de experiencia laboral</strong> usando Laravel, pero llevo
                usando PHP desde el año 2013 con proyectos personales.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-java-plain"}
          iconSize={50}
          skillname={"JAVA"}
          rating={4}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Aprendí Java tras 1 año en el ciclo de grado superior <strong>DAW</strong>, y tengo <strong>4 meses de experiencia laboral</strong>.
              </small>
            </section>
          )}
        />
      </section>
      <br/>
      <h2>HERRAMIENTAS</h2>
      <section className={'habilidades-grupo slidefrom-left'}>
        <SkillBlock
          icon={"devicon-git-plain"}
          iconSize={50}
          skillname={"GIT"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                He trabajado con GIT durante toda mi etapa como programador, siempre desde la consola de comandos.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-redux-plain"}
          iconSize={50}
          skillname={"REDUX"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                He trabajado con <strong>Redux</strong> laboralmente un total de <strong>4 años</strong>, para varios proyectos de React y React Native.
              </small>
            </section>
          )}
        />
        <SkillBlock
          // icon={"devicon-redux-plain"}
          iconSize={50}
          skillname={"ZUSTAND"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                He trabajado con Zustand como forma de manejar el estado de componentes en mi app <strong>Lista de la compra</strong>.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-mysql-plain"}
          iconSize={50}
          skillname={"MYSQL"}
          rating={7}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Llevo desde el año 2013 utilizando MySQL, y aunque no me considero un experto, sí que me sé desenvolver bastante bien.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-sass-original"}
          iconSize={50}
          skillname={"SASS"}
          rating={6}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Utilizo SASS en todos los proyectos personales que emprendo, y también lo he usado laboralmente por <strong>4 años</strong>.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-nodejs-plain"}
          iconSize={50}
          skillname={"NODE JS"}
          rating={5}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                He estudiado Node durante alrededor de un año. No me considero experto, pero no me resulta desconocido.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-docker-plain"}
          iconSize={50}
          skillname={"DOCKER"}
          rating={4}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Conozco aspectos básicos de Docker.
              </small>
            </section>
          )}
        />
        <SkillBlock
          icon={"devicon-amazonwebservices-original"}
          iconSize={50}
          skillname={"AMAZON WEBSERVICES"}
          rating={3}
          comment={(
            <section className={'skillblock-detailpopup'}>
              <small>
                Conozco aspectos básicos de AWS.
              </small>
            </section>
          )}
        />
      </section>
    </article>
  )
}

export default Habilidades;
