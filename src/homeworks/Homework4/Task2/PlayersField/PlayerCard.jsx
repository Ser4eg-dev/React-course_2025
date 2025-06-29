import { useState } from 'react';
import styles from './Player.module.css';

const PlayerCard = ({
  playerIndex,
  setUsedDigits,
  randomNumbers,
  setGuessedNumbers
}) => {
  const [input, setInput] = useState('');
  const [myGuesses, setMyGuesses] = useState([]);

  const handleInputChange = e => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      setInput(value);
    }
  };

  const handleGuess = () => {
    const digit = Number(input);

    if (input === '' || isNaN(digit)) return;

    setUsedDigits(prev => [...prev, digit]);

    if (randomNumbers.includes(digit)) {
      setGuessedNumbers(prev => [...prev, digit]);
      setMyGuesses(prev => [...prev, digit]);
    }

    setInput('');
  };

  return (
    <div className={styles.card}>
      <h3>Гравець {playerIndex + 1}</h3>
      <div className={styles.inputGroup}>
        <input
          type="text"
          maxLength={1}
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleGuess}>Зробити хід</button>
      </div>
      <div className={styles.guesses}>
        <strong>Вгадав:</strong> {myGuesses.join(', ')}
      </div>
    </div>
  );
};

export default PlayerCard;