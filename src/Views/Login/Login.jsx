import LoginPanel from '../../Components/LoginPanel/LoginPanel.jsx';
import RegisterPanel from '../../Components/RegisterPanel/RegisterPanel.jsx';

import { useNavigate } from 'react-router-dom';

import styles from './Login.scss'
export default function Login(){
    const navigate = useNavigate();

    const redirecionarParaOutraRota = () => {
        navigate("")
    };

    return(
        <>
        <a className='SetaEsquerda' href='/'> <i class="fas fa-arrow-left"></i> </a>
        <LoginPanel/> 
        </>
    )
}