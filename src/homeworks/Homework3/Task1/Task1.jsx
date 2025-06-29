import { useState } from 'react';
import styles from './Task1.module.css';

const employees = [
  'Іванов І.І.',
  'Петров П.П.',
  'Скрипка С.П.',
  'Гончаренко Г.О.',
  'Івась І.І.',
];

const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className={styles.highlight}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const Task1 = () => {
  const [query, setQuery] = useState('');

  const filtered = employees.filter(name =>
    name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Динамічний пошук</h3>
      <input
        type="text"
        placeholder="Пошук..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className={styles.input}
      />
      <h4 className={styles.subtitle}>Список працівників</h4>
      <ul className={styles.list}>
        {filtered.map((name, index) => (
          <li key={index} className={styles.item}>
            {highlightMatch(name, query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task1;
