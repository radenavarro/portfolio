import React from "react";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <article className={'hero-wrap'}>
      <section className={'hero'}>
        <h2>MI NOMBRE ES</h2>
        <h1><span className={'hero-highlight'}>RA</span>ÚL <span className={'hero-highlight'}>DE</span> LA PAZ <span className={'hero-highlight'}>NA</span>VARRO</h1>
        <h2>Y SOY DESARROLLADOR WEB</h2>
      </section>
    </article>

  )
}

export default Hero;
