import logo from './logo.svg';
import './App.css';
import {useElementSize} from "@reactuses/core";
import React, {useEffect, useRef} from "react";
import Encabezado from "./components/Encabezado";
import Navbar from "./components/Navbar";
import NavbarLite from "./components/NavbarHeader/NavbarLite";
import Footer from "./components/footer/Footer";
import {useLocation} from "react-router-dom";

const App = (props) => {
  const appRef = useRef();
  const Dimensions = useElementSize(appRef);
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={"App"}
      ref={appRef}
      // style={{height: Dimensions[1] ? `${Dimensions[1]}px` : "100vh"}}
    >
      {/*<Encabezado/>*/}
      {/*<Navbar/>*/}
      <NavbarLite/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default App;
