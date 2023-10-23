import React, {useState} from "react";
import Captcha from "../../components/captcha/Captcha";
import "./Contacto.scss";

const Contacto = (props) => {

  const [validCaptcha, setValidCaptcha] = useState(false);

  const handleCaptchaOk = () => {
    setValidCaptcha(true);
  }
  const handleCaptchaFail = () => {
    setValidCaptcha(false);
  }

  return (
    <article className={"contacto"}>
      <h2>CONTACTO</h2>
      <p>
        Si quieres ponerte en contacto conmigo, puedes hacerlo a través de correo electrónico en la parte superior derecha de la pantalla,
        o bien a través del pequeño formulario que aparece a continuación.
      </p>
      {!validCaptcha && (
        <>
          <br/>
          <small>Antes de nada, comprobemos que eres human@.</small>
          <Captcha
            onOk={handleCaptchaOk}
            onFail={handleCaptchaFail}
          />
        </>
      )}

      {validCaptcha && (
        <form action="">
          <textarea name="contacto" id="contacto" cols="30" rows="10"></textarea>
          <button className={"button"}>Enviar</button>
        </form>
      )}
    </article>
  )
}

export default Contacto;
