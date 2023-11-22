import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './Atividade5.scss'
const Alfabeto = require('./Imagens/alfabeto.png');
const Atividade5 = () => {
  const [letters, setLetters] = useState([
    { letter: '🌳', highlighted: false, resposta: true },
    { letter: '🧤', highlighted: false },
    { letter: '💍', highlighted: false, resposta: true},
    { letter: '👠', highlighted: false },
    { letter: '✈️', highlighted: false, resposta: true },
  ]);

  const handleClick = (index) => {
    const updatedLetters = [...letters];
    if ((updatedLetters[index].letter === '🌳' || updatedLetters[index].letter === '💍' || updatedLetters[index].letter === '✈️') && !updatedLetters[index].highlighted) {
      updatedLetters[index].highlighted = true;
      setLetters(updatedLetters);
    } else {
      // Reset all letters if a non-'A' letter is clicked
      setLetters(letters.map((letter) => ({ ...letter, highlighted: false })));
    }
  };

  const allAsHighlighted = letters.every((letter) => (letter.letter !== '🌳' && letter.letter !== '💍' && letter.letter !== '✈️') || letter.highlighted);
  useEffect(()=>{
    if (allAsHighlighted ){
      axios.post('http://localhost:5000/achievement', {trofeuNumero:5})
    }
  },[allAsHighlighted])

  return (
    <div className='container-atividade'>       
        <iframe className='VideoAula' src="https://www.youtube.com/embed/EBsUyKtK13I?si=7iJoJ36UuL8VDqx-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <img style={{height:'30%', marginTop:'10px', backgroundColor:'#ffffff', borderRadius:'100px'}} src={Alfabeto} alt="" /> */}
        {allAsHighlighted ? (<div className='winnable5'></div>):(

          <div style={{marginTop:'50px', display:'flex', flexDirection:'row',}}>
              {letters.map((letter, index) => (
              <span
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{ display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '180px',
                  width: '180px',
                  borderRadius: '50%',
                  marginRight: '5px',
                  fontSize: '120px',
                  color: letter.resposta ? '#23110f' : 'black',
                  backgroundColor: letter.highlighted ? '#23b80f' : '#678eff',
                  cursor: 'pointer',
                  borderColor: 'black',}}
              >
                  {letter.letter}
              </span>
              ))}
          </div> 
        )}
        
    </div>
  );
};

export default Atividade5;
