import React from "react";
import DevIcon from "./style/DevIcon";
import Rating from "./Rating";


const SkillBlock = (
  {
    icon = "",
    skillname = "",
    iconSize = 50,
    rating = 0,
    ...props
  }) => {
  return (
    <div className={`habilidades-bloque`}>
      <div className={'habilidades-bloque-encabezado'}>
        <DevIcon name={icon} size={iconSize}/> <h2>{skillname}</h2> <Rating value={rating}/>
      </div>
    </div>
  )
}

export default SkillBlock;
