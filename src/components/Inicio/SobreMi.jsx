import React from "react";
import "./SobreMi.scss";

const SobreMi = (props) => {
  return (
    <article className={'sobre-mi-container'}>
      <h2>SOBRE MI</h2>
      <div className={'sobre-mi-img img1'}></div>
      <p>
        <strong>-</strong> Mi primera experiencia en programación se remonta al año 1988, usando un Amstrad CPC 464 sin tener mucha idea.
        Actualmente cuento con <strong>4 años de experiencia laboral con React y Laravel</strong>, y más de 10 años
        utilizando <strong>Javascript</strong> y <strong>PHP</strong> si incluímos proyectos extralaborales.
      </p>
      <p>
        <strong>-</strong> Como programador he contribuído al <strong>desarrollo y mantenimiento desde 0 de un <em>ERP</em></strong> orientado a hostelería
        durante casi 4 años, con el <strong>59% del total de commits en el back</strong>, y el <strong>30% en el front</strong>.
        También he contribuído en varias aplicaciones de <strong>React Native</strong>, y extralaboralmente he desarrollado
        algunas otras desde 0.
      </p>
      <p>
        <strong>-</strong> La mayoría del tiempo he estado trabajando en oficina con equipos pequeños, pero también he trabajado en equipo
        junto a programador@s de latinoamérica y, en alguna ocasión, he tenido que desenvolverme en solitario. Del mismo modo,
        durante buena parte del tiempo que he estado programando laboralmente he sido, básicamente, la persona a la que
        acudir en la empresa ante cualquier cosa que tuviera que ver con <strong>React</strong> o <strong>Laravel</strong>, así que he
        aprendido a buscarme la vida.
      </p>
      <p>
        <strong>-</strong> Pero no sólo de programación vive el hombre. También soy aficionado al dibujo, a los videojuegos, a la música (especialmente
        Rock y Heavy 🤘, pero siempre con la mente abierta), y a la ciencia ficción en general. Y, a riesgo de sonar muy a <em>vintage</em>,
        también me gusta de vez en cuando salir a andar simplemente por despejar la cabeza.
      </p>
      <p>
        Ahora que me conoces un poco más...¿Te apetece echarle un ojo a mis proyectitos? 🙃
      </p>
    </article>
  )
}

export default SobreMi
