import React, {useRef, useState} from "react";
import DevIcon from "./style/DevIcon";
import Rating from "./Rating";
import "./Skillblock.scss";

const SkillBlock = (
  {
    icon = "",
    skillname = "",
    iconSize = 50,
    rating = 0,
    comment = false,
    iconColor = "inherit",
    ...props
  }) => {

  const [detailsOpened, setDetailsOpened] = useState(false);

  const handleDetailsClick = () => {
    setDetailsOpened(!detailsOpened);
  }

  return (
    <aside className={`habilidades-bloque ${!!comment ? 'clickable' : ''}`}>
      <details onClick={() => handleDetailsClick()}>
        <summary className={'habilidades-bloque-encabezado'}>
          <DevIcon name={icon} size={iconSize} color={iconColor} /> <h2>{skillname}</h2> <Rating value={rating}/>
        </summary>
        {!!comment && !!detailsOpened && (
          <div className={`skillblock-popup`}>
            {comment}
          </div>
        )}
      </details>
    </aside>
  )
}

export default SkillBlock;
