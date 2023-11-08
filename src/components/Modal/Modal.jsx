import React from "react";
import {AiFillCloseSquare} from "react-icons/ai";
import "./Modal.scss";

const Modal = (
  {
    header = "",
    onClose = () => {},
    visible = false,
    ...props
  }
) => {
  return !!visible ? (
    <>
      <div className={'modal-bg'}>

      </div>
      <div className={'modal'}>
        <div className={'modal-options'}>
          <AiFillCloseSquare
            className={''}
            onClick={onClose}
          />
        </div>
        <h1>{header}</h1>
        {props.children}
      </div>
    </>
  ) : <></>
}

export default Modal;
