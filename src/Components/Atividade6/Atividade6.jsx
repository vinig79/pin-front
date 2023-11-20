import React, { useState, useEffect } from "react";

import styles from "./Atividade6.scss";
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
    const keyPressed = event.key.toUpperCase();
    setCurrentInput((prevInput) => prevInput + keyPressed);
  };

  return (
    <div className='container-atividade'> 
      <iframe className='VideoAula' src="https://www.youtube.com/embed/ZoeFkk2a09M?si=7JcV5Y2k8W5T2WVV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <p>Digite as letras para formar: {words[currentWordIndex]}</p>
      <input
        type="text"
        onKeyPress={handleKeyPress}
        value={currentInput}
        readOnly
      />
      {gameStatus && <div className='winnable6'></div>}
    </div>
  );
};

export default Atividade6;
{
  /* <iframe className='VideoAula' src="https://www.youtube.com/embed/ZoeFkk2a09M?si=7JcV5Y2k8W5T2WVV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}
