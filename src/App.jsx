import logo from './logo.svg';
import './App.css';
import {useElementSize} from "@reactuses/core";
import React, {useRef} from "react";
import Encabezado from "./components/Encabezado";
import Navbar from "./components/Navbar";

const App = (props) => {
  const appRef = useRef();
  const Dimensions = useElementSize(appRef);
  return (
    <div
      className={"App"}
      ref={appRef}
      // style={{height: Dimensions[1] ? `${Dimensions[1]}px` : "100vh"}}
    >
      <Encabezado/>
      <Navbar/>
      {props.children}
    </div>
  );
}

export default App;
