import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './Videos.scss'
export default function Video() {
    const navigate = useNavigate();

    const redirecionarParaOutraRota = () => {
        navigate("")
    };

    const [data, setData] = useState({url:'https://www.youtube.com/embed/ODKTITUPusM?si=sjAFSV80wGXZ-d9f'});
    
    return(
        <>
        <body>
        <a className='SetaEsquerdaVideo' href='/'> <i className="fas fa-arrow-left"></i> </a>   
            <div className="ContainerAula">
                
                <h2>Aula</h2>
                <iframe className='VideoAula' src={data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </body>
        </>
    )
}