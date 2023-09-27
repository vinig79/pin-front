import { useNavigate } from 'react-router-dom';
import Logo from "../../Assets/Logo.png"

import styles from './MainNavBar.scss';
export default function MainNavBar(){
    const navigate = useNavigate();
     
    return(
        <>
            <navbar className='MainNavBarD'>
            <div className="nav-buttons">
                
            </div>
            <div className="logo">
                <img className="LogoMain" src={Logo} />
            </div>
            <div className="nav-buttons">
                <a type="submit" onClick={ () =>{navigate('/Login')}}>Entrar </a>
                <a type="submit" onClick={() =>{navigate('/Register')}}>Registrar </a>
            </div>
            </navbar>
        </>
    );
}