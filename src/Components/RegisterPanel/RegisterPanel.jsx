import styles from "./RegisterPanel.scss";
import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function RegisterPanel() {
    const navigate = useNavigate()
    const [data, setData] = useState({name:'',email:'',password1:'',password2:''})

    const handleInput = (event) =>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:5000/register",data)
        navigate('/')
    }

    return(
        <>
        <div className="RegisterBody">
            <div class="register-panel">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" class="register-input" placeholder="Nome" name="name" onChange={handleInput}/>
                <input type="email" class="register-input" placeholder="Email" name="email" onChange={handleInput}/>
                <input type="password" class="register-input" placeholder="Senha" name="password1" onChange={handleInput}/>
                <input type="password" class="register-input" placeholder="Confirmar Senha" name="password2" onChange={handleInput}/>
                <button type="submit" class="register-button">Registrar</button>
                </form>
            </div>
        </div>
        </>
    );
}