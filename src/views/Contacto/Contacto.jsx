import React, {useState} from "react";
import Captcha from "../../components/captcha/Captcha";
import "./Contacto.scss";
import {ToastContainer, toast, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FaThumbsUp} from "react-icons/fa";
import {Form} from "../../components/form/Form";

const Contacto = (props) => {

  const [validCaptcha, setValidCaptcha] = useState(false);

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

  return (
    <article className={"contacto"} data-testid={'test-contacto'}>
      <ToastContainer/>
      <h2>CONTACTO</h2>
      <section className={'contacto-texto'}>
        <p>Si tienes alguna pregunta o comentario sobre mi trabajo, estaré encantado de ayudarte a través de cualquiera de los siguientes medios:</p>
        <br/>
        <ul>
          <li>
            <strong>Correo electrónico:</strong> escríbeme a través de la dirección de correo electrónico que encontrarás en la parte superior derecha de esta página. Ten en
            cuenta, eso sí, que la dirección de e-mail tiene una codificación simple para evitar spambots: la @ aparece como {"&#64;"} mientras que el punto aparece
            como {"&#46;"}.
          </li>
          <li><strong>Formulario de contacto:</strong> si prefieres contactarme desde este mismo sitio, puedes enviarme un mensaje a través del formulario de contacto que encontrarás a continuación (requiere captcha).</li>
        </ul>
      </section>
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
          <Form/>
        </>
      )}
    </article>
  )
}

export default Contacto;
