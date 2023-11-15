import React, { useState } from 'react';

import styles from './Atividade1.scss'
const Atividade1 = () => {
  const [letters, setLetters] = useState([
    { letter: 'A', highlighted: false },
    { letter: 'H', highlighted: false },
    { letter: 'U', highlighted: false },
    { letter: 'T', highlighted: false },
    { letter: 'F', highlighted: false },
    { letter: 'G', highlighted: false },
    { letter: 'A', highlighted: false },
    { letter: 'W', highlighted: false },
    { letter: 'K', highlighted: false },
    { letter: 'B', highlighted: false },
    { letter: 'L', highlighted: false },
    { letter: 'A', highlighted: false },
    { letter: 'G', highlighted: false },
    { letter: 'A', highlighted: false },
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

  return (
    <div className='container-atividade'>
        <h2> 
            Aula 1
        </h2>
        
        <iframe className='VideoAula' src="https://www.youtube.com/embed/bWVNZ4T-g44?si=ckEJmfeAssDK6fR9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
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
        {allAsHighlighted && <p className='Nice'>Parabéns!</p>}
    </div>
  );
};

export default Atividade1;