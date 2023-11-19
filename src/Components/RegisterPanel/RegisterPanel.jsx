import styles from "./RegisterPanel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPanel() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    nome: "",
    email: "",
    password1: "",
    password2: "",
    isprofessor: false,
  });
  const [error, setError] = useState({
    passwordError: undefined,
    cadastroError: undefined,
  });

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data.isprofessor);
  };
  // const handleSubmit = (event) =>{
  //     event.preventDefault();
  //     axios.post("http://localhost:5000/register",data)
  //     navigate('/')
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (data.password1 !== data.password2) {
      setError({ passwordError: "senhas não são iguais" });
    } else {
      console.log(data);
      const response = await axios.post(
        "https://pin-back.vercel.app/register",
        data
      );

      console.log(response)
      if (response) {
        setError({ cadastroError: response?.data.error });
      } else {
        navigate("/login");
      }
    }
  };
  return (
    <>
      <div className="RegisterBody">
        <div className="register-panel">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="register-input"
              placeholder="Nome"
              name="nome"
              onChange={handleInput}
              required
            />
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                className="register-input"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                style={{ marginBottom: "0px" }}
                required
              />
              {error.cadastroError && (
                <span style={{ color: "red", marginTop: "-15px" }}>
                  [{error.cadastroError}]
                </span>
              )}
            </div>
            <input
              type="password"
              className="register-input"
              placeholder="Senha"
              name="password1"
              onChange={handleInput}
              required
            />
            <div style={{ marginBottom: "15px" }}>
              <input
                type="password"
                className="register-input"
                placeholder="Confirmar Senha"
                name="password2"
                onChange={handleInput}
                style={{ marginBottom: "0px" }}
                required
              />
              {error.passwordError && (
                <span style={{ color: "red", marginTop: "-15px" }}>
                  [{error.passwordError}]
                </span>
              )}
            </div>
            <button type="submit" className="register-button">
              Registrar
            </button>
            <div className="Login">
              <p>Deseja logar?</p>
              <button
                type="route"
                className="Login-butto"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                {" "}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
