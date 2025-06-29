import styles from './Task4.module.css';

const workersList = [
  { id: '111', name: 'Іванов', salary: 10000 },
  { id: '112', name: 'Петров', salary: 20000 },
  { id: '113', name: 'Сидоров', salary: 50000 },
];

const Task4 = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Список працівників</h2>
      <ul className={styles.list}>
        {workersList.map(worker => (
          <li key={worker.id} className={styles.item}>
            {worker.name}: {worker.salary} грн
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task4;
