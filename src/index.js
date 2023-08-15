import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//Pages
import Home from './Views/Home/Home.jsx';
import Login from './Views/Login/Login.jsx';
//styles
import styles from './index.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path: "Login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
 
reportWebVitals();
