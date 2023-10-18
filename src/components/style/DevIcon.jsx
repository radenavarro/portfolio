/**
 *
 * @param name
 * @param size
 * @param color
 * @param props
 * @returns {JSX.Element}
 * @public
 */
const DevIcon = ({
  name = "",
  size = 20,
  color = "inherit",
  ...props
}) => {
  return (
    <div className={'devicon'} style={{display:"inline-block", color}}>
      <i className={`${name}`} style={{fontSize:size}}></i>
    </div>

  )
}

export default DevIcon;
