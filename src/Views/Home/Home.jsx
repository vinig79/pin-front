import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'

import styles from "./Home.scss";
export default function Home(){
    const cursos = [
        "alfabetização 1 ✏️",
        "Leitura 1 📕",
        "alfabetização 2 ✏️",
        "Leitura 2 📕" ,
        "alfabetização 3 ✏️",
        "Leitura 3 📕",
    ];
    return(
        <>
            <MainNavBar/>
            <header> 
                <img src="Imagens\Logo.png" />
            </header>
            <div className='BodyHome'>
                <main>
                    <section class="cursos">
                        <h2>Fases </h2>
                        <div className='container_GridHome'>
                            {cursos.map((curso, index) => (
                            <div key={index} className="container_ItemGridHome">
                                {curso}
                            </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>  
            <footer>
                <p>&copy; 2023 ABC Down</p>
            </footer>
        </>
    );
}