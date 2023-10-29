import { useNavigate } from "react-router-dom";
import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'
import MainSideBar from '../../Components/MainSideBar/MainSideBar.jsx'
import Lapis from '../../Assets/lápis.png'

import styles from "./Home.scss";
export default function Home() {
    const navigate = useNavigate();
    let itens = []
    for (let i = 1; i <= 6; i++) {
        itens.push(<div key={i} className="container_ItemGridHome">
            <img src={require(`./Imagens/${i}.png`)} alt="" />
        </div>)
    }
    return (
        <>
            <MainNavBar />
            <MainSideBar />
            <div className="MainBodyHome">
                <header className='BarraHeaderHome'>

                </header>
                <div className='BodyHome'>
                    <main>
                        <section className="cursos">
                            <div className="container_GridHome">
                                {itens.map((itens, index) => (
                                    <a className='BotaoAula' onClick={() => { navigate('/Videos') }}>
                                        {itens}
                                    </a>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
                <div className='GridLapis'>
                </div>
            </div>
        </>
    );
}
