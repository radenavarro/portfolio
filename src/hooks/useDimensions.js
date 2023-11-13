import {useEffect, useState} from "react";


export const useDimensions = (ref) => {
  const [width, setWidth] = useState(undefined);
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    if (ref.current?.offsetWidth !== width) {
      setWidth(ref.current?.offsetWidth);
    }
  }, [width])

  useEffect(() => {
    if (ref.current?.offsetHeight !== height) {
      setHeight(ref.current?.offsetHeight);
    }
  }, [height])

  return [width, height]
}
