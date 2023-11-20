import React, { useState } from 'react';

import styles from './Atividade5.scss'
const Atividade5 = () => {
  const [letters, setLetters] = useState([
    { letter: '🌳', highlighted: false },
    { letter: '🧤', highlighted: false },
    { letter: '💍', highlighted: false },
    { letter: '👠', highlighted: false },
    { letter: '🦅', highlighted: false },
  ]);

  const handleClick = (index) => {
    const updatedLetters = [...letters];
    if ((updatedLetters[index].letter === '🌳' || updatedLetters[index].letter === '💍' || updatedLetters[index].letter === '🦅') && !updatedLetters[index].highlighted) {
      updatedLetters[index].highlighted = true;
      setLetters(updatedLetters);
    } else {
      // Reset all letters if a non-'A' letter is clicked
      setLetters(letters.map((letter) => ({ ...letter, highlighted: false })));
    }
  };

  const allAsHighlighted = letters.every((letter) => (letter.letter !== '🌳' && letter.letter !== '💍' && letter.letter !== '🦅') || letter.highlighted);

  return (
    <div className='container-atividade'>       
        <iframe className='VideoAula' src="https://www.youtube.com/embed/EBsUyKtK13I?si=7iJoJ36UuL8VDqx-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div style={{marginTop:'50px'}}>
            {letters.map((letter, index) => (
            <span
                key={index}
                onClick={() => handleClick(index)}
                style={{ marginRight: '5px', fontSize: '50px', backgroundColor: letter.highlighted ? 'yellow' : '#f4f4f4', cursor:"pointer"}}
            >
                {letter.letter}
            </span>
            ))}
        </div> 
        {allAsHighlighted && <div className='winnable5'></div>}
    </div>
  );
};

export default Atividade5;
