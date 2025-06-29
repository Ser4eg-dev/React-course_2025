import { useState, useEffect } from 'react';
import styles from './Player.module.css';

const PlayersField = ({
  playersQuantity,
  setUsedDigits,
  usedDigits,
  randomNumbers,
  setGuessedNumbers,
  currentPlayer,
  setCurrentPlayer,
  gameEnded,
  setGameEnded,
  setLoser
}) => {
  const [inputValues, setInputValues] = useState([]);
  const [myGuesses, setMyGuesses] = useState([]);
  const [inputErrors, setInputErrors] = useState([]);

  useEffect(() => {
    setInputValues(Array(playersQuantity).fill(''));
    setInputErrors(Array(playersQuantity).fill(false));
    setMyGuesses(Array.from({ length: playersQuantity }, () => []));
  }, [playersQuantity]);

  const handleInputChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    setInputValues(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });

    setInputErrors(prev => {
      const updated = [...prev];
      updated[index] = usedDigits.includes(Number(value));
      return updated;
    });
  };

  const handleGuess = index => {
    const value = inputValues[index];
    const digit = Number(value);

    if (value === '' || isNaN(digit) || usedDigits.includes(digit)) return;

    setUsedDigits(prev => [...prev, digit]);

    if (randomNumbers.includes(digit)) {
      setGuessedNumbers(prev => {
        const updated = [...prev, digit];
        if (updated.length === randomNumbers.length) {
          setGameEnded(true);
          setLoser(index);
        }
        return updated;
      });

      setMyGuesses(prev => {
        const updated = [...prev];
        updated[index] = [...updated[index], digit];
        return updated;
      });
    }

    setInputValues(prev => {
      const updated = [...prev];
      updated[index] = '';
      return updated;
    });

    setInputErrors(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });

    setCurrentPlayer(prev => (prev + 1) % playersQuantity);
  };

  return (
    <div className={styles.playerGrid}>
      {Array.from({ length: playersQuantity }).map((_, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            currentPlayer === index ? styles.active : ''
          }`}
        >
          <h3>Гравець {index + 1}</h3>
          <div className={styles.inputGroup}>
            <input
              type="text"
              maxLength={1}
              value={inputValues[index] || ''}
              onChange={e => handleInputChange(e.target.value, index)}
              disabled={currentPlayer !== index || gameEnded}
              className={inputErrors[index] ? styles.error : ''}
            />
            <button
              onClick={() => handleGuess(index)}
              disabled={
                currentPlayer !== index || gameEnded || inputErrors[index]
              }
            >
              Зробити хід
            </button>
          </div>
          <div className={styles.guesses}>
            <strong>Вгадав:</strong>{' '}
            {Array.isArray(myGuesses[index]) && myGuesses[index].length > 0
              ? myGuesses[index].join(', ')
              : '—'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayersField;
