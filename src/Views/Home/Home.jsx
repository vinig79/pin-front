import MainNavBar from '../../Components/MainNavBar/MainNavBar.jsx'

import styles from "./Home.scss";
export default function Home(){
    let itens = []
    for (let i = 1 ; i <=6 ; i++){
        itens.push(<div key={i} className="container_ItemGridHome">
            <img  src={require(`./Imagens/${i}.png`)} alt="" />
        </div>)
    }
    return(
        <>
            <MainNavBar/>
            <header> 
                
            </header>
            <div className='BodyHome'>
                <main>
                    <section class="cursos">
                        <div className='container_GridHome'>
                            {itens}
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
