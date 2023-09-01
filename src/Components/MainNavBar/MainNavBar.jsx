import { useNavigate } from 'react-router-dom';
import Logo from "../../Assets/Logo.png"

import styles from './MainNavBar.scss';
export default function MainNavBar(){
    const navigate = useNavigate();
     
    return(
        <>
            <navbar className='MainNavBarD'>
            <div class="nav-buttons">
                <a href="#"> Cursos</a>
            </div>
            <div class="logo">
                <img src={Logo} />
            </div>
            <div class="nav-buttons">
                <a type="submit" onClick={ () =>{navigate('/Login')}}>Entrar </a>
                <a type="submit" onClick={() =>{navigate('/Register')}}>Registrar </a>
            </div>
            </navbar>
        </>
    );
}