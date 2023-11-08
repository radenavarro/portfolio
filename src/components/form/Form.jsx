import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./Form.scss";

export const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
      .then((result) => {
        // console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <form className={'contacto-form'} ref={form} onSubmit={sendEmail}>
      <label>
        <input type="text" name="to_name" value={"Radena"} readOnly hidden />
      </label>
      <label>
        <span>Tu nombre</span>
        <input className={'contacto-inputtext'} type="text" name="from_name" />
      </label>
      <label>
        <span>Tu dirección e-mail</span>
        <input className={'contacto-inputtext'} type="email" name="from_email" />
      </label>
      <label>
        <span>Mensaje</span>
        <textarea className={'contacto-email'} name="message" />
      </label>
      <input className={'button'} type="submit" value="Enviar" />
    </form>
  );
};
