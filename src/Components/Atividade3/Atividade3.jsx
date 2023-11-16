import React, { useState } from 'react';

import styles from './Atividade3.scss'
const Atividade3 = () => {
    //N O L R S E W Q A
    const [letters, setLetters] = useState([
        { letter: 'U', highlighted: false },
        { letter: 'N', highlighted: false },
        { letter: 'O', highlighted: false },
        { letter: 'L', highlighted: false },
        { letter: 'R', highlighted: false },
        { letter: 'I', highlighted: false },
        { letter: 'S', highlighted: false },
        { letter: 'E', highlighted: false },
        { letter: 'W', highlighted: false },
        { letter: 'Q', highlighted: false },
        { letter: 'A', highlighted: false },
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
            <div style={{marginTop:'50px'}}>
                {letters.map((letter, index) => (
                <span
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{ marginRight: '5px', fontSize: '50px', backgroundColor: letter.highlighted ? 'yellow' : '#f4f4f4'}}
                >
                    {letter.letter}
                </span>
                ))}
            </div> 
            {allAsHighlighted && <div className='winnable'></div>}
        </div>
      );
    };
export default Atividade3;