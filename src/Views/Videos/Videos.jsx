import { useState } from 'react';


import styles from './Videos.scss'
export default function Video() {
    const [data, setData] = useState({url:'https://www.youtube.com/embed/ODKTITUPusM?si=sjAFSV80wGXZ-d9f'});
    
    return(
        <>
        <body>
            
            <div className="container">
                <h2>Aula</h2>
                <iframe width="560" height="315" src={data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </body>
        </>
    )
}