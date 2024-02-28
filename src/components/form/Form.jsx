import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast, Flip} from "react-toastify";
import "./Form.scss";
import {FaThumbsDown, FaThumbsUp, FaSpinner} from "react-icons/fa";

export const Form = () => {

  const [sending, setSending] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true)
    const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
      .then((result) => {
        // console.log(result.text);
        toast(
          <header className={'toast-header'}>
            <strong>El email ha sido enviado </strong><FaThumbsUp/>
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
        setSending(false)
      }, (error) => {
        console.error(error.text);
        toast(
          <header className={'toast-header'}>
            <strong>No se ha podido enviar el email</strong><FaThumbsDown/>
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
        setSending(false)
      });
  };

  return (
    <form className={'contacto-form'} ref={form} onSubmit={sendEmail}>
      <ToastContainer/>
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
      <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', gap: '8px'}}>
        <input className={'button'} type="submit" value={"Enviar"} /> {sending && <FaSpinner className={'rotate-slow'}/>}
      </div>
    </form>
  );
};
