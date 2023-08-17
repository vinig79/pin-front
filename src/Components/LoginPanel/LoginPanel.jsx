import axios from "axios"
import { useState} from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginPanel.scss";
export default function LoginPanel(){
    const navigate = useNavigate()

    return(
        <>
            <div className="LoginBody">
                <div className="login-panel">
                    <h2>Login</h2>
                    <form>
                    <input type="text" class="login-input" placeholder="Usuário"/>
                    <input type="password" class="login-input" placeholder="Senha"/>
                    <button type="submit" class="login-button">Entrar</button>
                    <div class="registro">
                        <p>Não possui Conta?</p>
                        <button type="route" class="register-butto" onClick={ () =>{navigate('/Register')}}> Registrar</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}