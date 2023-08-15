import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'

import styles from "./Home.scss";
export default function Home(){
    return(
        <>
            <MainNavBar/>
            <header>
                <h1>Cursos de Alfabetização</h1>
                <p>Seja bem-vindo ao nosso site de cursos de alfabetização. Aqui você pode aprender a ler e escrever de forma fácil e divertida!</p>
            </header>
            
            <main>
                <section class="cursos">
                <h2>Nossos Cursos</h2>
                <ul>
                    <li>Alfabetização 1</li>
                    <li>Alfabetização 2</li>
                    <li>Alfabetização 3</li>
                    <li>Alfabetização 4</li>
                </ul>
                </section>
            </main>
            <div>

            </div>
            <footer>
                <p>&copy; 2023 Cursos de Alfabetização</p>
            </footer>
        </>
    );
}