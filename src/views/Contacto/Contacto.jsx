import React from "react";
import Captcha from "../../components/captcha/Captcha";

const Contacto = (props) => {

  return (
    <article className={"contacto"}>
      <h2>CONTACTO</h2>
      <p>
        Si quieres ponerte en contacto conmigo, puedes hacerlo a través de correo electrónico en la parte superior derecha de la pantalla,
        o bien a través del campo de texto que aparece a continuación.
      </p>
      <Captcha/>
      <form action="">
        <textarea name="contacto" id="contacto" cols="30" rows="10"></textarea>
        <button className={"button"}>Enviar</button>
      </form>
    </article>
  )
}

export default Contacto;
