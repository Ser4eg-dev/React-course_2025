import { useState } from 'react';
import NumbersField from './NumbersField/NumbersField';
import styles from './Task2.module.css';
import ConfigGame from './ConfigGame/ConfigGame';
import PlayersField from './PlayersField/PlayersField';

const generateNumbersArray = (quantity = 3) => {
  const digits = [];
  while (digits.length < quantity) {
    const d = Math.floor(Math.random() * 10);
    if (!digits.includes(d)) digits.push(d);
  }
  return digits;
};

const Task2 = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  // кіл-ть чисел
  const [numbersQuantity, setNumbersQuantity] = useState();
  // кіл-ть гравців
  const [playersQuantity, setPlayersQuantity] = useState();
  // масив рандомних чисел
  const [randomNumbers, setRandomNumbers] = useState();
  // масив відгаданих чисел
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  // масив використаних чисел
  const [usedDigits, setUsedDigits] = useState([]);
  // активний гравець
  const [currentPlayer, setCurrentPlayer] = useState(0);
  // гравець яий програв
  const [loser, setLoser] = useState(null);

  const handleRestart = () => {
    setGameStarted(false);
    setLoser(null);
    setCurrentPlayer(0);
    setUsedDigits([]);
    setGuessedNumbers([]);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Гра “Вгадай число”</h2>

      {!gameStarted ? (
        <ConfigGame
          setPlayersQuantity={setPlayersQuantity}
          setRandomNumbers={setRandomNumbers}
          setGameStarted={setGameStarted}
          generateNumbersArray={generateNumbersArray}
        />
      ) : (
        <>
          <NumbersField
            randomNumbers={randomNumbers}
            guessedNumbers={guessedNumbers}
            usedDigits={usedDigits}
          />
          <PlayersField
            playersQuantity={playersQuantity}
            setUsedDigits={setUsedDigits}
            randomNumbers={randomNumbers}
            usedDigits={usedDigits}
            setGuessedNumbers={setGuessedNumbers}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            gameEnded={gameEnded}
            setGameEnded={setGameEnded}
            setLoser={setLoser}
          />
          {loser !== null && (
            <div className={styles.result}>
              <p>💥 Програв гравець {loser + 1}</p>
              <button onClick={handleRestart}>Почати нову гру</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Task2;
