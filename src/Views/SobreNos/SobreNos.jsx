

import styles from './SobreNos.scss'
export default function SobreNos() {
    let nomes = ['José', 'Paloma', 'Luan', 'Vinicius'];
    let itens = [];
    for (let i = 1; i <= 4; i++) {
        itens.push(<div key={i} className='Item-Foto'>        
            <img className='Fotos' src={require(`./Imagens/${1}.png`)} alt="" />
            <p className='Num-Foto'>{nomes[i]}</p>
        </div>)
    }
    return(
        <>
            <a className='SetaEsquerdaNos' href='/'> <i className="fas fa-arrow-left"></i> </a>
            <div className='Container-SobreNos'>
                <div className='SobreNos'>
                    <header className='Header-SobreNos'>
                        <h2 className='h2SobreNos'>Sobre nós</h2>
                    </header>
                    <div className='Album'>
                        {itens.map((itens, index) => {
                            <>
                                {itens}
                            </>
                        })}    
                    </div>
                </div>
            </div>
        </>
    )
}