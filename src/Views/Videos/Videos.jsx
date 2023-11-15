import { useEffect } from 'react';
import { useParams  } from 'react-router-dom';

import Atividade1 from '../../Components/Atividade1/Atividade1.jsx';
import Atividade2 from '../../Components/Atividade2/Atividade2.jsx';
import Atividade3 from '../../Components/Atividade3/Atividade3.jsx';

import styles from './Videos.scss'
const Video = () => {
  const { numeroAtividade } = useParams();

  let componenteAtividade;
  //Condições para determinar qual componente exibir com base no número da atividade
  switch (numeroAtividade) {
    case '1':
      componenteAtividade = <Atividade1 />;
      break;
    case '2':
      componenteAtividade = <Atividade2 />;
      break;
    case '3':
      componenteAtividade = <Atividade3 />;
      break;
    // // Adicione mais casos para as outras atividades
    default:
      componenteAtividade = <Atividade1 />;
  }
  return(
    <>
      <body>
        <a className='SetaEsquerdaVideo' href='/'> <i className="fas fa-arrow-left"></i> </a>   
          <div className="ContainerAula">
            {componenteAtividade}
          </div>
      </body>
    </>
  );
};

export default Video;