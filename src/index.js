import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css';
import './Base.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inicio from "./views/Inicio/Inicio";
import Contacto from "./views/Contacto/Contacto";
import Proyectos from "./views/Proyectos/Proyectos";
import Habilidades from "./views/Habilidades/Habilidades";
import Navbar from "./components/Navbar";
import Encabezado from "./components/Encabezado";
import BgThunders from "./components/style/BgThunders";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Inicio/>
      </App>
    )
  },
  {
    path: "proyectos",
    element: (
      <App>
        <Proyectos/>
      </App>
    )
  },
  {
    path: "habilidades",
    element: (
      <App>
        <Habilidades/>
        {/*<BgThunders/>*/}
      </App>
    )
  },
  {
    path: "contacto",
    element: (
      <App>
        <Contacto/>
      </App>
    )
  }
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
