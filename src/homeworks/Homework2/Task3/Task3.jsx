import { useState } from 'react';
import styles from './Task3.module.css';

const element = {
  image:
    'https://media.istockphoto.com/id/184276818/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%B5-%D1%8F%D0%B1%D0%BB%D1%83%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=b4rwqHVUrtfedn1Xjfnpkqn-OX3ROs3Az34WWp29BcA=',
  en: 'apple',
  ua: 'яблуко',
};

const Task3 = () => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCheck = () => {
    const normalized = answer.trim().toLowerCase();
    setIsCorrect(normalized === element.ua);
  };

  return (
    <div className={styles.trainerContainer}>
      <h2>Тренажер англійської мови</h2>

      <div
        className={`${styles.elementBox} ${
          isCorrect === null
            ? ''
            : isCorrect
            ? styles.correct
            : styles.incorrect
        }`}
      >
        <img src={element.image} alt="element" className={styles.elementImg} />
        <p>Слово: {element.en}</p>
      </div>

      <input
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Введіть переклад..."
        className={styles.input}
      />
      <button onClick={handleCheck}>Перевірити</button>

      {isCorrect !== null && (
        <p
          className={`${styles.message} ${
            isCorrect ? styles.success : styles.error
          }`}
        >
          {isCorrect ? 'Добре. Молодець!' : 'Невірно, спробуйте ще раз'}
        </p>
      )}
    </div>
  );
};

export default Task3;
