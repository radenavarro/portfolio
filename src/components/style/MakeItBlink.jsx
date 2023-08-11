import React, {useEffect, useRef, useState} from "react";
import "./MakeItBlink.scss";

const MakeItBlink = (
  {
    timeTillBlink = 2000,
    ...props
  }) => {

  const texto = useRef();
  const [triggerBlink, setTriggerBlink] = useState(false);

  const mainInterval = () => {};

  useEffect(() => {
    initTimeInterval()

    return () => {
      clearInterval(mainInterval);
    }
  },[])

  useEffect(() => {
    if (triggerBlink) {
      setTimeout(() => {
        setTriggerBlink(false);
      }, 200)
    }
  }, [triggerBlink])

  const initTimeInterval = () => {
    setInterval(() => {
      if (!triggerBlink) setTriggerBlink(true);
    }, timeTillBlink)
  }

  return (
    <span
      className={triggerBlink ? 'blink' : ''}
      ref={texto}
      // style={{color: getColor()}}
    >
      {props.children}
    </span>
  )
}

export default MakeItBlink;
