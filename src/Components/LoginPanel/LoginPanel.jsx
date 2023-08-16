import styles from "./LoginPanel.scss";
import axios from "axios"
import { useState} from "react";

export default function LoginPanel(){
    
    

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
                        <button type="route" class="register-butto"> Registrar</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}