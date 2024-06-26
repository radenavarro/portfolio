import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './Base.scss';
import './fonts/static/Montserrat-Regular.ttf';
import reportWebVitals from './reportWebVitals';

import routes from "./routesConfig";
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
