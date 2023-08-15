import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'

import styles from "./Home.scss";
export default function Home(){
    const cursos = [
        "alfabetização 1",
        "alfabetização 2",
        "alfabetização 3",
        "alfabetização 4",
        "alfabetização 5",
        "alfabetização 6",
    ];
    return(
        <>
            <MainNavBar/>
            <header>
                <h1>Cursos de Alfabetização</h1>
                <p>Seja bem-vindo ao nosso site de cursos de alfabetização. Aqui você pode aprender a ler e escrever de forma fácil e divertida!</p>
            </header>
            <div className='BodyHome'>
                <main>
                    <section class="cursos">
                        <h2>Nossos Cursos</h2>
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
                <p>&copy; 2023 Cursos de Alfabetização</p>
            </footer>
        </>
    );
}