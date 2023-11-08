import React, {useState} from "react";
import "./Proyecto.scss";
import Modal from "./Modal/Modal";
import {AiFillYoutube} from "react-icons/ai";
import {FaFilm} from "react-icons/fa";

const Proyecto = (
  {
    header = "",
    icons = [],
    year = "",
    screens = [],
    videos = [],
    ...props
  }
) => {
  const [modalImg, setModalImg] = useState(undefined);
  return (
    <>
      <Modal
        visible={!!modalImg}
        onClose={() => setModalImg(undefined)}
      >
        <img key={crypto.randomUUID()} className={'proyecto-img-modal'} src={modalImg?.src} alt={modalImg?.alt}/>
      </Modal>
      <aside className={'proyecto'}>
        <h3>{year} | {header} | {icons?.map((i) => i)}</h3>
        <section className={'proyecto-links'}>
          <div className={'proyecto-img-container'}>
            {screens.map(screen => <img key={crypto.randomUUID()} className={'proyecto-img'} src={screen.src} alt={screen.alt} onClick={() => setModalImg(screen)}/>)}
          </div>
          <div className={'proyecto-video-container'}>
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
