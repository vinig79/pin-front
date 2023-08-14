
import { useNavigate } from 'react-router-dom';

import styles from './Login.scss'
export default function Login(){
    const navigate = useNavigate();

    const redirecionarParaOutraRota = () => {
        navigate("/")
    };

    return(
        <>
            <button type="submit" onClick={redirecionarParaOutraRota} >Sair</button>
            <p>
                Parabens, você logou. Seu Bosta:D
            </p>
        </>
    )
}