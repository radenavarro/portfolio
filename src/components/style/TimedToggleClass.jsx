import React, {useEffect, useRef, useState} from "react";
import "./TimedToggleClass.scss";

const TimedToggleClass = (
  {
    timeTillToggle = 2000,
    defaultClass = '',
    swapClass = '',
    swapClassMilliseconds = 1000,
    ...props
  }) => {

  const texto = useRef();
  const [triggerToggle, setTriggerToggle] = useState(false);

  const mainInterval = () => {};

  useEffect(() => {
    initTimeInterval()

    return () => {
      clearInterval(mainInterval);
    }
  },[])

  useEffect(() => {
    if (triggerToggle) {
      setTimeout(() => {
        setTriggerToggle(false);
      }, swapClassMilliseconds)
    }
  }, [triggerToggle])

  const initTimeInterval = () => {
    setInterval(() => {
      if (!triggerToggle) setTriggerToggle(true);
    }, timeTillToggle)
  }

  return (
    <span
      className={triggerToggle ? swapClass : defaultClass}
      ref={texto}
    >
      {props.children}
    </span>
  )
}

export default TimedToggleClass;
