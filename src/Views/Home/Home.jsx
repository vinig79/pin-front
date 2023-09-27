import { useNavigate } from "react-router-dom";
import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'
import MainSideBar from '../../Components/MainSideBar/MainSideBar.jsx'
import Lapis from '../../Assets/lápis.png'

import styles from "./Home.scss";
export default function Home(){
    const navigate = useNavigate();
    let itens = []
    for (let i = 1 ; i <=6 ; i++){
        itens.push(<div key={i} className="container_ItemGridHome">
            <img  src={require(`./Imagens/${i}.png`)} alt="" />
        </div>)
    }
    return(
        <>
            <MainNavBar/>
            <MainSideBar/>
            <header className='BarraHeaderHome'> 
                
            </header>
            <div className='BodyHome'>
                <main>
                    <section className="cursos">
                    <div className="container_GridHome">
                    {itens.map((itens, index) => (
                        <a onClick={() => {navigate('/Videos')}}>
                            <div key={index} className="container_ItemGridHome">
                            {itens}
                            </div>
                        </a>
                        
                    ))}
                    </div>
                    </section>
                </main>
            </div>  
            <footer>
                
            </footer>
            <div className='GridLapis'>
                <img className="Lapis" src={Lapis} alt="" />
                {/* <img className="Lapis" src={Lapis} alt="" />
                <img className="Lapis" src={Lapis} alt="" />
                <img className="Lapis" src={Lapis} alt="" /> */}
            </div>
        </>
    );
}
