import Logo from "../../Assets/Logo.png"
import styles from "./MainSideBar.scss"
export default function MainSideBar(){
    return(
        <>
        <div class="container_SideBar">
            <nav>
                <div class="navbar">
                    <div class="logo">
                        <img className="LogoSide" src={Logo} alt=""></img>
                        <h1>Speefyr</h1>
                    </div>
                    <ul>
                        <li><a className="ButtonSide" href="#">
                            <i class="fas fa-user"></i>
                            <span class="nav-item">Conta</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide" href="#">
                            <i class="fas fa-list"></i>
                            <span class="nav-item">Coleção</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide" href="#">
                            <i class="fas fa-info"></i>
                            <span class="nav-item">Informações</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide-baixo" href="#">
                            <i class="fas fa-address-card"></i>
                            <span class="nav-item">Sobre nós</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}