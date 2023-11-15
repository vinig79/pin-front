import { useEffect } from 'react';
import { useParams  } from 'react-router-dom';

import Atividade1 from '../../Components/Atividade1/Atividade1.jsx';
import Atividade2 from '../../Components/Atividade2/Atividade2.jsx';
import Atividade3 from '../../Components/Atividade3/Atividade3.jsx';
import Atividade4 from '../../Components/Atividade4/Atividade4.jsx';
import Atividade5 from '../../Components/Atividade5/Atividade5.jsx';
import Atividade6 from '../../Components/Atividade6/Atividade6.jsx';

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
    case '4':
      componenteAtividade = <Atividade4 />;
      break;
    case '5':
      componenteAtividade = <Atividade5 />;
      break;
    case '6':
      componenteAtividade = <Atividade6 />;
      break;
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