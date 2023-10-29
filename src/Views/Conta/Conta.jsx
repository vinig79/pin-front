

import styles from './Conta.scss'
export default function Conta() {
    return(
        <>
        <a className='SetaEsquerdaConta' href='/'> <i className="fas fa-arrow-left"></i> </a>
        <div class="Container-Conta">
            <div class="User-info">
                <header className="HeaderConta">
                    <h2 className='H2Conta'>Dados da conta</h2>
                </header>
                <p><span class="label">Nome:</span> João da Silva</p>
                <p><span class="label">Email:</span> joao.silva@example.com</p>
                <p><span class="label">Senha:</span> ********</p>
            </div>
        </div>
        </>
    )
}

    
