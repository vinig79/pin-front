import { useNavigate } from 'react-router-dom';

import styles from './MainNavBar.scss';
export default function MainNavBar(){
    const navigate = useNavigate();
     
    return(
        <>
            <navbar className='MainNavBarD'>
            <div class="nav-buttons">
                <a href="#">Cursos</a>
            </div>
            <div class="logo">
                <a href="#">ABC Down</a>
            </div>
            <div class="nav-buttons">
                <a type="submit" onClick={ () =>{navigate('/Login')}}>Login </a>
                <a type="submit" onClick={() =>{navigate('/Register')}}>Register </a>
            </div>
            </navbar>
        </>
    );
}