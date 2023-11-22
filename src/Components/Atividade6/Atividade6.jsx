import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Atividade6.scss";
const Alfabeto = require('./Imagens/alfabeto.png');
const Atividade6 = () => {
  const words = ["BOLA", "PATO", "DADO"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    if (currentInput === currentWord) {
      if (currentWordIndex === words.length - 1) {
        setGameStatus("Você acertou todas as palavras!");
      } else {
        setCurrentInput("");
        setCurrentWordIndex(currentWordIndex + 1);
      }
    }
  }, [currentInput, currentWordIndex, words]);

  const handleKeyPress = (event) => {
    if (typeof(Number(event.target.value)) == 'number'){
      
    }
    const keyPressed = event.target.value.toUpperCase();
    setCurrentInput(keyPressed);
  };
  useEffect(()=>{
    if (gameStatus ){
      axios.post('http://localhost:5000/achievement', {trofeuNumero:6})
    }
  },[gameStatus])
  return (
    <div className='container-atividade'> 
      <iframe className='VideoAula' src="https://www.youtube.com/embed/ZoeFkk2a09M?si=7JcV5Y2k8W5T2WVV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {gameStatus ? (<div className='winnable6'></div>):
      (

      <div style={{marginTop:'20px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <p style={{fontWeight:'bold', fontSize:'130px', justifyContent:'center'}}>{words[currentWordIndex]}</p>
        <input
          type="text"
          onChange={handleKeyPress}
          value={currentInput}
          style={{height:'30%', width:'50%', fontSize:'100px', justifyContent:'center', borderRadius:'10px', backgroundColor:'#678eff'}}
        />
      </div>
      )}
      
    </div>
  );
};

export default Atividade6;