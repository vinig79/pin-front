import styles from "./RegisterPanel.scss";
export default function RegisterPanel() {
    return(
        <>
        <div className="RegisterBody">
            <div class="register-panel">
                <h2>Registro</h2>
                <form>
                <input type="text" class="register-input" placeholder="Nome"/>
                <input type="email" class="register-input" placeholder="Email"/>
                <input type="password" class="register-input" placeholder="Senha"/>
                <input type="password" class="register-input" placeholder="Confirmar Senha"/>
                <button type="submit" class="register-button">Registrar</button>
                </form>
            </div>
        </div>
        </>
    );
}