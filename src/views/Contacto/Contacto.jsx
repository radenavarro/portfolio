import React, {useState} from "react";
import Captcha from "../../components/captcha/Captcha";
import "./Contacto.scss";
import {ToastContainer, toast, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FaThumbsUp} from "react-icons/fa";
import {Form} from "../../components/form/Form";

const Contacto = (props) => {

  const [validCaptcha, setValidCaptcha] = useState(false);

  const email = import.meta.env.VITE_EMAIL;

  const handleCaptchaOk = () => {
    toast(
      <header className={'toast-header'}>
        <strong>Validación correcta</strong><FaThumbsUp/>
      </header>
      , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      }
    )
    setValidCaptcha(true);
  }
  const handleCaptchaFail = () => {
    toast(
      <>
        <strong>❌ Validación incorrecta ❌</strong><br/>
        <small>Vuelve a intentarlo.</small>
      </>
      , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      }
    )
    setValidCaptcha(false);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // window.open("mailto:" + email + "?subject=" + asunto + "?body=" + contenidoEmail);
  }

  return (
    <article className={"contacto"}>
      <ToastContainer/>
      <h2>CONTACTO</h2>
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
        <>
          <p>
            Si quieres ponerte en contacto conmigo, puedes hacerlo a través de correo electrónico en la parte superior derecha de la pantalla,
            o bien a través del pequeño formulario que aparece a continuación.
          </p>
          {/*<form className={'contacto-form'}>*/}
          {/*  <label>*/}
          {/*    <span>Asunto: </span>*/}
          {/*    <input type="text" placeholder={"Tu asunto aquí"} className={'contacto-asunto'} onChange={handleAsuntoChange}/>*/}
          {/*  </label>*/}
          {/*  <textarea*/}
          {/*    className={"contacto-email"}*/}
          {/*    placeholder={"El contenido de tu e-mail aquí"}*/}
          {/*    id="contacto-email"*/}
          {/*    onChange={handleTextareaChange}*/}
          {/*  ></textarea>*/}
          {/*  <button className={"button"} onClick={handleSubmit}>Enviar</button>*/}
          {/*</form>*/}
          <Form/>
        </>
      )}
    </article>
  )
}

export default Contacto;
