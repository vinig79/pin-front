import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import axios from "axios";

import styles from "./MainNavBar.scss";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
export default function MainNavBar() {


  const navigate = useNavigate();
  const [logado, setLogado] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/").then(res =>{
        if(res.data.valid){
            console.log(res.data.valid)
            setLogado(res.data.valid)
        }
    }).catch(erro =>{console.log(erro)})
  }, []);

  const handleDelete = () =>{
    axios.get("http://localhost:5000/logout").then(res => {
      window.location.reload()
    }).catch(err => console.log(err))
  }

  return (
    <>
      <navbar className="MainNavBarD">
        <div className="nav-buttons"></div>
        <div className="logo">
          <img className="LogoMain" src={Logo} />
        </div>
        <div className="nav-buttons">
          {logado ? (
            <a
              type="submit"
              onClick={handleDelete}
            >
              Logout
            </a>
          ) : (
            <>
              <a
                type="submit"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Entrar{" "}
              </a>
              <a
                type="submit"
                onClick={() => {
                  navigate("/Register");
                }}
              >
                Registrar{" "}
              </a>
            </>
          )}
        </div>
      </navbar>
    </>
  );
}