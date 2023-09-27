import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginPanel.scss";
export default function LoginPanel(){
    const navigate = useNavigate();
    const [data, setData] = useState({email:'',password:''});
    
    const handleInput = (event) =>{
        setData({...data, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        //axios.post('http://localhost:5000/login',data).catch(()=>{
        //    console.log('erro')
        //})
        navigate('/')
    };

    return(
        <>
            <div className="LoginBody">
                <div className="login-panel">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                    <input type="email" className="login-input" placeholder="Email" name='email' onChange={handleInput} required/>
                    <input type="password" className="login-input" placeholder="Senha"  name='password'onChange={handleInput} required/>
                    <button type="submit" className="login-button">Entrar</button>
                    <div className="registro">
                        <p>Não possui Conta?</p>
                        <button type="route" className="register-butto" onClick={ () =>{navigate('/Register')}}> Registrar</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}