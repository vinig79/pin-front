import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'
import MainSideBar from '../../Components/MainSideBar/MainSideBar.jsx'

import styles from "./Home.scss";
export default function Home() {
    let itens = []
    for (let i = 1; i <= 6; i++) {
        itens.push(
            <div key={i} className="container_ItemGridHome">
                <Link to={`/Videos/${i}`} className='BotaoAula'>
                    <img src={require(`./Imagens/${i}.png`)} alt="" />
                </Link>
            </div>
        );
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
                                    <div className='BotaoAula'>
                                        {itens}
                                    </div>
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
