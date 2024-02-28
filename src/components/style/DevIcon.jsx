import React from "react";

/**
 *
 * @param name
 * @param size
 * @param color
 * @param title
 * @param props
 * @returns {JSX.Element}
 * @public
 */
const DevIcon = ({
  name = "",
  size = 20,
  color = "inherit",
  title = undefined,
  ...props
}) => {
  return (
    <div className={'devicon'} style={{display:"inline-block", color}}>
      <i className={`${name}`} style={{fontSize:size}} title={title} ></i>
    </div>

  )
}

export default DevIcon;
