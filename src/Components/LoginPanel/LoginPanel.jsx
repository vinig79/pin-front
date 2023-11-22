import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./LoginPanel.scss";

axios.defaults.withCredentials = true;

const LoginPanel = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        data,
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        const { Status } = response.data;
        if (Status === "Sucesso") {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error.message);
    }
  };

  return (
    <div className="LoginBody">
      <div className="login-panel">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleInput}
            required
          />
          <div>
            <input
              type="password"
              className="login-input"
              placeholder="Senha"
              name="password"
              value={data.password}
              onChange={handleInput}
              required
            />
            {error && <span style={{ color: "red" }}> [{error}]</span>}
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
          <div className="registro">
            <p>Não possui Conta?</p>
            <button
              type="button"
              className="register-button"
              onClick={() => navigate("/Register")}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPanel;
