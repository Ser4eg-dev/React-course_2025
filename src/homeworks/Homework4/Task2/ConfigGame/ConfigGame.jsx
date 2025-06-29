import { useState } from 'react';
import styles from './ConfigGame.module.css';

const ConfigGame = ({
  setPlayersQuantity,
  setRandomNumbers,
  setGameStarted,
  generateNumbersArray
}) => {
  const [players, setPlayers] = useState(2);
  const [numbers, setNumbers] = useState(3);

  const MIN_PLAYERS = 2;
  const MAX_PLAYERS = 9;
  const MIN_NUMBERS = 3;
  const MAX_NUMBERS = 9;

  const handlePlayersChange = e => {
    let value = Number(e.target.value);
    if (value < MIN_PLAYERS) value = MIN_PLAYERS;
    if (value > MAX_PLAYERS) value = MAX_PLAYERS;
    setPlayers(value);
  };

  const handleNumbersChange = e => {
    let value = Number(e.target.value);
    if (value < MIN_NUMBERS) value = MIN_NUMBERS;
    if (value > MAX_NUMBERS) value = MAX_NUMBERS;
    setNumbers(value);
  };

  const handleGameStarted = () => {
    setPlayersQuantity(players);
    setRandomNumbers(generateNumbersArray(numbers));
    setGameStarted(true);
  };

  return (
    <div className={styles.configWrapper}>
      <div className={styles.configForm}>
        <div className={styles.formItem}>
          <label>Вкажіть кількість гравців:</label>
          <input
            type="number"
            min={MIN_PLAYERS}
            max={MAX_PLAYERS}
            placeholder="Вкажіть кількість гравців..."
            value={players}
            onChange={handlePlayersChange}
          />
        </div>
        <div className={styles.formItem}>
          <label>Вкажіть кількість чисел:</label>
          <input
            type="number"
            min={MIN_NUMBERS}
            max={MAX_NUMBERS}
            placeholder="Вкажіть кількість чисел..."
            value={numbers}
            onChange={handleNumbersChange}
          />
        </div>
        <button onClick={handleGameStarted}>Почати гру</button>
      </div>
    </div>
  );
};

export default ConfigGame;
