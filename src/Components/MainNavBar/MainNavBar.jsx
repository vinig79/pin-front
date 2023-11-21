import { useNavigate } from 'react-router-dom';
import Logo from "../../Assets/Logo.png"
import { useAuth } from '../../context/Authenticate';

import styles from './MainNavBar.scss';
export default function MainNavBar(){
    const navigate = useNavigate();
    const { logado, logout } = useAuth();

    console.log(logado)
     
    return(
        <>
            <navbar className='MainNavBarD'>
            <div className="nav-buttons">
                
            </div>
            <div className="logo">
                <img className="LogoMain" src={Logo} />
            </div>
            <div className="nav-buttons">
                { logado ? (
                    <a type='submit' onClick={() =>{ logout(); navigate('/')}}>Logout</a>
                ) :(
                    <>
                        <a type="submit" onClick={ () =>{navigate('/Login')}}>Entrar </a>
                        <a type="submit" onClick={() =>{navigate('/Register')}}>Registrar </a>
                    </>
                )
                }
            </div>
            </navbar>
        </>
    );
}