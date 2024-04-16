import App from "./App";
import Inicio from "./views/Inicio/Inicio";
import Proyectos from "./views/Proyectos/Proyectos";
import Habilidades from "./views/Habilidades/Habilidades";
import Contacto from "./views/Contacto/Contacto";
import React from "react";
import NotFound from "./components/notFound/NotFound";

const routes = [
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
  },
  {
    path: "*",
    element: (
      <NotFound/>
    )
  }
]

export default routes;
