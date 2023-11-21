import React, { useState } from 'react';

import styles from './Atividade3.scss'
const Alfabeto = require('./Imagens/alfabeto.png');
const Atividade3 = () => {
    //N O L R S E W Q A
    const [letters, setLetters] = useState([
        { letter: 'U', highlighted: false, resposta: true },
        { letter: 'N', highlighted: false },
        { letter: 'S', highlighted: false },
        { letter: 'E', highlighted: false, resposta: true },
        { letter: 'W', highlighted: false },
        { letter: 'Q', highlighted: false },
        { letter: 'A', highlighted: false, resposta: true },
      ]);
    
      const handleClick = (index) => {
        const updatedLetters = [...letters];
        if ((updatedLetters[index].letter === 'A' || updatedLetters[index].letter === 'O' || updatedLetters[index].letter === 'E' || updatedLetters[index].letter === 'I' || updatedLetters[index].letter === 'U') && !updatedLetters[index].highlighted) {
          updatedLetters[index].highlighted = true;
          setLetters(updatedLetters);
        } else {
          // Reset all letters if a non-'A' letter is clicked
          setLetters(letters.map((letter) => ({ ...letter, highlighted: false })));
        }
      };
    
      const allAsHighlighted = letters.every((letter) => (letter.letter !== 'A' && letter.letter !== 'E' && letter.letter !== 'I' && letter.letter !== 'O' && letter.letter !== 'U') || letter.highlighted);
    
      return (
        <div className='container-atividade'>       
            <iframe className='VideoAula' src="https://www.youtube.com/embed/lkdpQbUuuuI?si=336LC7Buoj8_bOX6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/* <img style={{height:'30%', marginTop:'10px', backgroundColor:'#ffffff', borderRadius:'100px'}} src={Alfabeto} alt="" /> */}
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
                    fontSize: '180px',
                    color: letter.resposta ? '#23110f' : 'black',
                    backgroundColor: letter.highlighted ? '#23b80f' : '#678eff',
                    cursor: 'pointer',
                    borderColor: 'black',}}
                >
                    {letter.letter}
                </span>
                ))}
            </div> 
            {allAsHighlighted && <div className='winnable3'></div>}
        </div>
      );
    };
export default Atividade3;