import { useState } from 'react';
import styles from './Task2.module.css';

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = squares => {
  for (let [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
};

const Task2 = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current);
  const winner = winnerInfo?.player;
  const winningLine = winnerInfo?.line || [];

  const handleClick = index => {
    if (winner || current[index]) return;

    setHistory(prevHistory => {
      const newHistory = prevHistory.slice(0, stepNumber + 1);
      const nextSquares = [...newHistory[newHistory.length - 1]];
      nextSquares[index] = xIsNext ? 'X' : 'O';
      return [...newHistory, nextSquares];
    });

    setStepNumber(prev => prev + 1);
    setXIsNext(prev => !prev);
  };

  const jumpTo = move => {
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  };

  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const renderSquare = i => (
    <div
      key={i}
      className={`${styles.cell} ${
        current[i] === 'X' ? styles.X : current[i] === 'O' ? styles.O : ''
      } ${winningLine.includes(i) ? styles.winning : ''}`}
      onClick={() => handleClick(i)}
    >
      {current[i]}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
      </div>

      <div className={styles.info}>
        {stepNumber > 0 && (
          <button className={styles.restartButton} onClick={restartGame}>
            Почати гру заново
          </button>
        )}

        <p className={styles.infoText}>
          {winner
            ? `Переможець: ${winner}`
            : `Наступний хід: ${xIsNext ? 'Хрестик' : 'Нулик'}`}
        </p>

        <ol className={styles.historyList}>
          {history.map((_, move) => (
            <li key={`move-${move}`}>
              <button
                onClick={() => jumpTo(move)}
                className={`${styles.historyButton} ${
                  move === stepNumber ? styles.activeStep : ''
                }`}
              >
                {move === 0 ? 'Початок гри' : `Перейти до ходу #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Task2;
