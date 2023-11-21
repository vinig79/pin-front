
import { useAuth } from "../../context/Authenticate";
import { useEffect } from "react";
import styles from './Conta.scss'

export default function Conta() {
    const { logado, user } = useAuth();
    console.log(logado)

    return(
        <>
        
        <a className='SetaEsquerdaConta' href='/'> <i className="fas fa-arrow-left"></i> </a>
        
            <div class="Container-Conta">
            {logado ? (
                <div class="User-info">
                    <header className="HeaderConta">
                        <h2 className='H2Conta' style={{fontSize:"60px "}}>Dados da conta</h2>
                    </header>
                    <p style={{fontSize:"50px "}}><span class="label">Nome:</span> {user.name}</p>
                    <p style={{fontSize:"50px "}}><span class="label">Email:</span>{user.email}</p>
                    <p style={{fontSize:"50px "}}><span class="label">Senha:</span> ********</p>
                </div>
           

        ):(
            <h1>Não há usuario logado</h1>
        )}
         </div>
        </>
    )
}

    
