

const DevIcon = ({
  name = "",
  size = 20,
  ...props
}) => {
  return (
    <div className={'devicon'} style={{display:"inline-block"}}>
      <i className={`${name}`} style={{fontSize:size}}></i>
    </div>

  )
}

export default DevIcon;
