import styles from "./RegisterPanel.scss";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function RegisterPanel() {
    const navigate = useNavigate();
    const [data, setData] = useState({ nome: '', email: '', password1: '', password2: '', isprofessor: false });
    const [passwordError, setPasswordError] = useState('');

    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     axios.post("http://localhost:5000/register",data)
    //     navigate('/')
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (data.password1 !== data.password2) {
            alert('As senhas não coincidem.');
        } else {
            await axios.post("https://pin-back.vercel.app/register", data) 
            navigate('/')
        }
    }
    return (
        <>
            <div className="RegisterBody">
                <div className="register-panel">
                    <h2>Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="register-input" placeholder="Nome" name="nome" onChange={handleInput} required/>
                        <input type="email" className="register-input" placeholder="Email" name="email" onChange={handleInput} required/>
                        <input type="password" className="register-input" placeholder="Senha" name="password1" onChange={handleInput} required/>
                        <input type="password" className="register-input" placeholder="Confirmar Senha" name="password2" onChange={handleInput} required/>
                        <button type="submit" className="register-button" >Registrar</button>
                        <div className="Login">
                            <p>Deseja logar?</p>
                            <button type="route" className="Login-butto" onClick={() => { navigate('/Login') }}> Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}