import React, {useEffect} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import "./Captcha.scss";


const Captcha = (
  {
    onOk = () => {},
    onFail = () => {},
    ...props
  }
) => {

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const submitCaptcha = () => {
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) === true) {
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = "";
      onOk();
    }

    else {
      alert('El captcha no concuerda');
      document.getElementById('user_captcha_input').value = "";
      onFail()
    }
  };

  return (
    <article className={"captcha"}>
      <section className={"captcha-reload"}>
        <LoadCanvasTemplate
          reloadText={"Recargar captcha"}
          reloadColor={"#f3d5a7"}
        />
      </section>

      <section className={"captcha-input"}>
        <input placeholder="Introduce val. captcha" id="user_captcha_input" name="user_captcha_input" type="text"></input>
      </section>

      <section className={"captcha-submit"}>
        <button className="button" onClick={() => submitCaptcha()}>Validar</button>
      </section>
    </article>
  );
}

export default Captcha;
