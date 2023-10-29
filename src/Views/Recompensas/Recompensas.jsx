

import styles from './Recompensas.scss'
export default function Recompensas() {
    let itens = []
    for (let i = 1; i <= 6; i++) {
        itens.push(<div key={i} className='Item-Colecao'>        
            <img className='Trophys' src={require(`./Imagens/trophy.png`)} alt="" />
            <p className='Num-Trophy'>{i}</p>
        </div>)
    }
    return(
        <>
            <a className='SetaEsquerdaRecompensas' href='/'> <i className="fas fa-arrow-left"></i> </a>
            <div className='Container-Recompensas'>
                <div className='Recompensas'>
                    <header className="Header-Recompensa">
                        <h2 className='H2Recompensa'>Coleção</h2>
                    </header>
                    <div className='Colecao'>
                        {itens.map((itens, index) => (
                            <>
                                {itens}
                            </>
                        ))}
                    </div>
                    
                </div>
            </div>
        </>
    )
}