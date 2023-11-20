import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginPanel.scss";
export default function LoginPanel() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://pin-back.vercel.app/login",
      data
    );
    if (response.data.error) {
      setError(response?.data.error);
    } else {
      navigate("/");
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
