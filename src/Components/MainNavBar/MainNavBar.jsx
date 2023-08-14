
import { useNavigate } from 'react-router-dom';

import styles from './MainNavBar.scss';
export default function MainNavBar(){
    const navigate = useNavigate();

    const redirecionarParaOutraRota = () => {
        navigate("/Login")
    };
    return(
        <>
            <navbar className='MainNavBarD'>
            <div class="nav-buttons">
                <a href="#">Cursos</a>
            </div>
            <div class="logo">
                <a href="#">Daw Pin</a>
            </div>
            <div class="nav-buttons">
                <a type="submit" onClick={redirecionarParaOutraRota}>Login</a>
                <a type="submit" onClick={redirecionarParaOutraRota}>Register</a>
            </div>
            </navbar>
        </>
    );
}