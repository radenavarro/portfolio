import './App.css';
import React, {useEffect, useRef} from "react";
import NavbarLite from "./components/NavbarHeader/NavbarLite";
import Footer from "./components/footer/Footer";
import {useLocation} from "react-router-dom";

const App = (props) => {
  const appRef = useRef();
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
    >
      <NavbarLite/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default App;
