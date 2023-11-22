import React, { useState , useEffect} from 'react';
import axios from 'axios';

import styles from './Atividade1.scss'
const Alfabeto = require('./Imagens/alfabeto.png');
const Atividade1 = () => {
  const [letters, setLetters] = useState([
    { letter: 'A', highlighted: false, resposta: true },
    { letter: 'H', highlighted: false },
    { letter: 'G', highlighted: false },
    { letter: 'A', highlighted: false, resposta: true },
    { letter: 'W', highlighted: false },
    { letter: 'L', highlighted: false },
    { letter: 'A', highlighted: false, resposta: true },

  ]);

  const handleClick = (index) => {
    const updatedLetters = [...letters];
    if (updatedLetters[index].letter === 'A' && !updatedLetters[index].highlighted) {
      updatedLetters[index].highlighted = true;
      setLetters(updatedLetters);
    } else {
      // Reset all letters if a non-'A' letter is clicked
      setLetters(letters.map((letter) => ({ ...letter, highlighted: false })));
    }
  };
  const allAsHighlighted = letters.every((letter) => letter.letter !== 'A' || letter.highlighted);
  useEffect(()=>{
        if (allAsHighlighted ){
          axios.post('http://localhost:5000/achievement', {trofeuNumero:1})
        }
      },[allAsHighlighted])
  

  return (
    <div className='container-atividade'>
      <iframe className='VideoAula' src="https://www.youtube.com/embed/bWVNZ4T-g44?si=ckEJmfeAssDK6fR9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      {/* <img style={{height:'30%', marginTop:'10px', backgroundColor:'#ffffff', borderRadius:'100px'}} src={Alfabeto} alt="" /> */}
      {allAsHighlighted ? (<div className='winnable1'></div>) :
        (<div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', }}>
          {letters.map((letter, index) => (
            <span
              key={index}
              onClick={() => handleClick(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '180px',
                width: '180px',
                borderRadius: '50%',
                marginRight: '5px',
                fontSize: '180px',
                color: letter.resposta ? '#23110f' : 'black',
                backgroundColor: letter.highlighted ? '#23b80f' : '#678eff',
                cursor: 'pointer',
                borderColor: 'black',
              }}
            >
              {letter.letter}
            </span>
          ))}
        </div>)
      }
    </div>
  );
};

export default Atividade1;