import React, {useState} from "react";
import "./Proyecto.scss";
import Modal from "./Modal/Modal";
import {AiFillYoutube} from "react-icons/ai";
import {FaFilm} from "react-icons/fa";
import {styled} from "styled-components";

const Proyecto = (
  {
    header = "",
    icons = [],
    year = "",
    screens = [],
    videos = [],
    links = [],
    ...props
  }
) => {
  const [modalImg, setModalImg] = useState(undefined);

  const Imagen = styled.div`
    background-image: url(${modalImg?.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    height: 100%;
  `
  return (
    <>
      <Modal
        visible={!!modalImg}
        onClose={() => setModalImg(undefined)}
      >
        {/*<img key={crypto.randomUUID()} className={'proyecto-img-modal'} src={modalImg?.src} alt={modalImg?.alt}/>*/}
        <div className={'proyecto-img-modal'}>
          <Imagen key={crypto.randomUUID()} />
        </div>
      </Modal>
      <aside className={'proyecto'}>
        <h3>{year} | {header} | {icons?.map((i) => i)}</h3>
        <section className={'proyecto-links'}>
          <div className={'proyecto-img-container'}>
            {screens.map(screen => <img key={crypto.randomUUID()} className={'proyecto-img'} src={screen.src} alt={screen.alt} onClick={() => setModalImg(screen)}/>)}
          </div>
          <div className={'proyecto-video-container'}>
            {links.map(link =>
              <a
                key={crypto.randomUUID()}
                className={'proyecto-link'}
                href={link.src}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {link.icon}
              </a>)}
            {videos.map(video =>
              <a
                key={crypto.randomUUID()}
                className={'proyecto-video'}
                href={video}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <AiFillYoutube/>
              </a>)}
          </div>
        </section>
        <section className={'proyecto-text-container'}>{props.children}</section>
      </aside>
    </>
  )
}

export default Proyecto;
