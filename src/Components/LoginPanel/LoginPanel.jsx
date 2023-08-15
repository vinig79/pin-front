import styles from "./LoginPanel.scss";
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
                    </form>
                </div>
            </div>
        </>
    );
}