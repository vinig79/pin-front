
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Conta.scss'

export default function Conta() {
    const [user, setUser] = useState()
    useEffect(()=>{
        axios.get("ht")
    })
   
    return(
        <>
        
        <a className='SetaEsquerdaConta' href='/'> <i className="fas fa-arrow-left"></i> </a>
        
            <div class="Container-Conta">
            {? (
                <div class="User-info">
                    <header className="HeaderConta">
                        <h2 className='H2Conta' style={{fontSize:"60px "}}>Dados da conta</h2>
                    </header>
                    <p style={{fontSize:"50px "}}><span class="label">Nome:</span> {user.name}</p>
                    <p style={{fontSize:"50px "}}><span class="label">Email:</span>{user.email}</p>
                </div>
           

        ):(
            <h1>Não há usuario logado</h1>
        )}
         </div>
        </>
    )
}

    
