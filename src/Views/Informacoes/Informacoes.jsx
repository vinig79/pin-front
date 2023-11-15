import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './Informacoes.scss'
export default function Informacoes() {
    return (
        <>
            <body>
                <a className='SetaEsquerdaInfo' href='/'> <i className="fas fa-arrow-left"></i> </a>
                <div className="ContainerInfo">
                    <div className='InfoValue'>
                        <header className="HeaderInfo">
                            <div>
                                <h2 className='H2Info'>Síndrome de Down e Leitura</h2>
                            </div>
                            
                        </header>

                        <p>A Síndrome de Down é uma condição genética que ocorre devido à presença de um cromossomo extra no par 21, resultando em um total de 47 cromossomos em vez dos 46 habituais. Isso causa um conjunto de características físicas e desafios de desenvolvimento.</p>

                        <p>Pessoas com Síndrome de Down geralmente apresentam características faciais distintas, atrasos no desenvolvimento, deficiência intelectual de graus variados e podem ter problemas de saúde, como cardiopatias e distúrbios da tireoide, entre outros. No entanto, é importante ressaltar que o impacto da Síndrome de Down varia de pessoa para pessoa.</p>

                        <p>A habilidade de ler é importante para todas as pessoas, incluindo aquelas com Síndrome de Down. Aqui estão algumas razões pelas quais a leitura é significativa para elas:</p>

                        <ul className='UlInfo'>
                            <li className='LiInfo'>Comunicação: A leitura ajuda na comunicação e expressão de ideias, desejos e necessidades. Isso melhora a interação social e a capacidade de se comunicar com os outros.</li>
                            <li className='LiInfo'>Independência: A capacidade de ler proporciona uma maior independência, permitindo que as pessoas com Síndrome de Down acessem informações, compreendam instruções e tomem decisões por si mesmas.</li>
                            <li className='LiInfo'>Aprendizado: A leitura é fundamental para o aprendizado contínuo. Ao ler, as pessoas com Síndrome de Down podem adquirir conhecimento e desenvolver habilidades cognitivas.</li>
                            <li className='LiInfo'>Inclusão: A capacidade de ler facilita a inclusão em ambientes educacionais e de trabalho. Isso aumenta as oportunidades de educação e emprego.</li>
                            <li className='LiInfo'>Autoestima: Ser capaz de ler e compreender textos pode aumentar a autoestima e a autoconfiança das pessoas com Síndrome de Down, tornando-as mais aptas a participar ativamente na sociedade.</li>
                        </ul>

                        {/* <p>Aprender a ler é uma conquista importante que contribui para a qualidade de vida e a independência das pessoas com Síndrome de Down. Oferecer oportunidades de educação inclusiva e apoio adequado é fundamental para ajudá-las a desenvolver essa habilidade.</p> */}
                    </div>
                </div>
            </body>
        </>
    )
}