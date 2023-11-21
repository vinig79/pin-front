import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/Authenticate.jsx';
//Pages
import Home from './Views/Home/Home.jsx';
import Login from './Views/Login/Login.jsx';
import Register from './Views/Register/Register.jsx'
import Videos from './Views/Videos/Videos.jsx'
import Informacoes from './Views/Informacoes/Informacoes.jsx';
import Conta from './Views/Conta/Conta.jsx'
import Recompensas from './Views/Recompensas/Recompensas.jsx'
import SobreNos from './Views/SobreNos/SobreNos.jsx';

import styles from './index.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },{
    path: "Login",
    element: <Login/>,
  },{
    path:"Register",
    element:<Register/>,
  },{
    path: "Videos/:numeroAtividade",
    element:<Videos/>,
  },{
    path: "Informacoes",
    element:<Informacoes/>,
  },{
    path: "Conta",
    element:<Conta/>,
  },{
    path: "Recompensas",
    element:<Recompensas/>,
  },{
    path: "SobreNos",
    element:<SobreNos/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
 
reportWebVitals();
