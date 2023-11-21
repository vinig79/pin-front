import React, { useState } from 'react';

import styles from './Atividade2.scss';
const Alfabeto = require('./Imagens/alfabeto.png');
const Atividade2 = () => {
    const [letters, setLetters] = useState([
        { letter: 'C', highlighted: false, resposta: true },
        { letter: 'T', highlighted: false },
        { letter: 'J', highlighted: false },
      ]);
      const handleClick = (index) => {
        const updatedLetters = [...letters];
        if ((updatedLetters[index].letter === 'C') && !updatedLetters[index].highlighted) {
          updatedLetters[index].highlighted = true;
          setLetters(updatedLetters);
        } else {
          // Reset all letters if a non-'A' letter is clicked
          setLetters(letters.map((letter) => ({ ...letter, highlighted: false })));
        }
      };
      const allAsHighlighted = letters.every((letter) => (letter.letter !== 'C') || letter.highlighted);
    
      const [letters2, setLetters2] = useState([
        { letter2: 'L', highlighted: false },
        { letter2: 'N', highlighted: false, resposta: true },
        { letter2: 'F', highlighted: false },
      ]);
      const handleClick2 = (index2) => {
        const updatedLetters2 = [...letters2];
        if ((updatedLetters2[index2].letter2 === 'N') && !updatedLetters2[index2].highlighted) {
          updatedLetters2[index2].highlighted = true;  
          setLetters2(updatedLetters2);
        } else {
          // Reset all letters if a non-'A' letter is clicked
          setLetters2(letters2.map((letter2) => ({ ...letter2, highlighted: false })));
        }
      };
      const allAsHighlighted2 = letters2.every((letter2) => (letter2.letter2 !== 'N') || letter2.highlighted);
    
      return (
        <div className='container-atividade'>       
            <iframe className='VideoAula' src="https://www.youtube.com/embed/JTkid5jrMRQ?si=sOGOoQngNdS7GFnO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            {/* <img style={{height:'30%', marginTop:'10px', backgroundColor:'#ffffff', borderRadius:'100px'}} src={Alfabeto} alt="" /> */}

            <div style={{display:'flex', flexDirection:'row', gridGap:'200px'}}>
              <div style={{alignItens:'center'}}>
                  <div style={{display:'flex', color:'black', justifyContent:'center'}}>
                    <h1 style={{color:'black', fontSize:'100px'}}> A B _ </h1>
                  </div>
                    <div style={{marginTop:'0px', display:'flex', flexDirection:'row',}}>
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
                </div>
              <div>
                  <div style={{display:'flex', color:'black', justifyContent:'center'}}>
                    <h1 style={{color:'black', fontSize:'100px'}}> L M _ </h1>
                  </div>
                  <div style={{marginTop:'0px', display:'flex', flexDirection:'row',}}>
                      {letters2.map((letter2, index) => (
                      <span
                          key={index}
                          onClick={() => handleClick2(index)}
                          style={{ display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '180px',
                          width: '180px',
                          borderRadius: '50%',
                          marginRight: '5px',
                          fontSize: '180px',
                          color: letter2.resposta ? '#23110f' : 'black',
                          backgroundColor: letter2.highlighted ? '#23b80f' : '#678eff',
                          cursor: 'pointer',
                          borderColor: 'black',}}
                      >
                          {letter2.letter2}
                      </span>
                      ))}
                  </div> 
                  
                </div>          
              </div>
              {(allAsHighlighted && allAsHighlighted2) && <div className='winnable2'></div>}
            </div>      
    );
};
export default Atividade2;