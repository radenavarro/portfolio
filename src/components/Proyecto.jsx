import React from "react";
import "./Proyecto.scss";

const Proyecto = (
  {
    header = "",
    icons = [],
    year = "",
    screens = [],
    ...props
  }
) => {
  return (
    <aside className={'proyecto'}>
      <h3>{year} | {header} | {icons?.map((i) => i)}</h3>
      <div>{props.children}</div>
    </aside>
  )
}

export default Proyecto;
