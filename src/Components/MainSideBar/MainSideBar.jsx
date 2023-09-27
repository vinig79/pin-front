import Logo from "../../Assets/Logo.png"
import styles from "./MainSideBar.scss"
export default function MainSideBar(){
    return(
        <>
        <div className="container_SideBar">
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img className="LogoSide" src={Logo} alt=""></img>
                        <h1>Speefyr</h1>
                    </div>
                    <ul>
                        <li><a className="ButtonSide" href="#">
                            <i className="fas fa-user"></i>
                            <span className="nav-item">Conta</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide" href="#">
                            <i className="fas fa-list"></i>
                            <span className="nav-item">Coleção</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide" href="#">
                            <i className="fas fa-info"></i>
                            <span className="nav-item">Informações</span>
                        </a>
                        </li>
                        <li><a className="ButtonSide-baixo" href="#">
                            <i className="fas fa-address-card"></i>
                            <span className="nav-item">Sobre nós</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}