import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authenticate";

import styles from "./LoginPanel.scss";
export default function LoginPanel() {
  // Utilize o hook useAuth para acessar o contexto de autenticação
  const { login } = useAuth();

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Faça a chamada à API de login
      const response = await axios.post(
        "https://pin-back.vercel.app/login",
        data
      );

      if (response.data.error) {
        setError(response?.data.error);
      } else {
        // Se o login for bem-sucedido, use o contexto de autenticação para armazenar o token
        const res = response.data;
        console.log(res)
        login(res);
        navigate('/')

        // Redirecione para a página desejada (por exemplo, '/')
        
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error.message);
    }
  };

  return (
    <>
      <div className="LoginBody">
        <div className="login-panel">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              required
            />
            <div>
              <input
                type="password"
                className="login-input"
                placeholder="Senha"
                name="password"
                onChange={handleInput}
                required
              />
              {error && <span style={{color:'red'}}> [{error}]</span>}
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
            <div className="registro">
              <p>Não possui Conta?</p>
              <button
                type="route"
                className="register-butto"
                onClick={() => {
                  navigate("/Register");
                }}
              >
                {" "}
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}