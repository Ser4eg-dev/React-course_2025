import styles from '../Task2.module.css';

const NumbersField = ({ randomNumbers, guessedNumbers, usedDigits }) => {
  return (
    <div className={styles.numbersField}>
      {/* {console.log(randomNumbers)} */}
      <h2>Випадковий масив чисел</h2>
      <div className={styles.digitList}>
        {randomNumbers.map((num, i) => (
          <div key={i} className={styles.digitBox}>
            {guessedNumbers.includes(num) ? num : '?'}
          </div>
        ))}
      </div>
      <div className={styles.usedDigits}>
        <strong>Використані цифри:</strong> {usedDigits.join(', ') || '—'}
      </div>
    </div>
  );
};

export default NumbersField;
