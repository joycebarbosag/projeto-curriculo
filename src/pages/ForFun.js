import React, { useState } from 'react';
import BigBox from '../components/BigBox';
import './ForFun.css';

const ForFun = () => {
  const [attempts, setAttempts] = useState([]);
  const [userGuess, setUserGuess] = useState('');
  const [randomCombination, setRandomCombination] = useState(generateRandomCombination());


  function generateRandomCombination() {
    let digits = [];
    while (digits.length < 4) {
      let num = Math.floor(Math.random() * 10);
      if (!digits.includes(num)) {
        digits.push(num);
      }
    }
    return digits.join('');
  }

  const handleGuess = () => {
    if (userGuess.length === 4 && !isNaN(userGuess)) {
      const result = checkGuess(userGuess, randomCombination);
      setAttempts([{ guess: userGuess, result }, ...attempts]);
      setUserGuess(''); 
    } else {
      alert("Por favor, insira um palpite de 4 dígitos!");
    }
  };

  const checkGuess = (guess, combination) => {
    let bulls = 0;
    let cows = 0;
    const guessArr = guess.split('');
    const combinationArr = combination.split('');

    guessArr.forEach((digit, idx) => {
      if (digit === combinationArr[idx]) {
        bulls++;
      } else if (combinationArr.includes(digit)) {
        cows++;
      }
    });

    return `${bulls} Bulls, ${cows} Cows`;
  };

  const showAlert = () => {
    alert(`A combinação aleatória escolhida foi: ${randomCombination}`);
  };

  return (
    <BigBox>
    <div className='bulls-cows-container'>
      <h2>Bulls e Cows!</h2>
      <p>Tente advinhar a combinação secreta de 4 dígitos, sendo cada um deles um número único.<br/>
      Atenção: Bulls são os números na posição correta e Cows, os numeros em posição errada.</p>
      
      <input 
        type="text" 
        value={userGuess} 
        onChange={(e) => setUserGuess(e.target.value)} 
        maxLength="4" 
        placeholder="Digite seu palpite" 
      />
      
      <button onClick={handleGuess}>Enviar Palpite</button>

      <button onClick={showAlert}>Mostrar Combinação Aleatória</button>
      
      <h2>Tentativas Anteriores</h2>
      <ul>
        {attempts.reverse().map((attempt, index) => (
          <li key={index}>
            <strong>{attempt.guess}</strong>: {attempt.result}
          </li>
        ))}
      </ul>
    </div>
    </BigBox>
  );
};

export default ForFun;