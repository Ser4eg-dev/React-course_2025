import styles from './Task5.module.css';

const results = [
  {
    domain: 'W3SchoolsUA',
    title: 'React Підручник — W3Schools українською',
    url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
    description:
      'React — це бібліотека JavaScript для створення інтерфейсів користувача. React дозволяє нам...',
  },
  {
    domain: 'React',
    title: 'Посібник: знайомство з React',
    url: 'https://react.dev/learn',
    description:
      'Даний посібник не потребує попереднього ознайомлення з React. Перед початком роботи...',
  },
  {
    domain: 'W3SchoolsUA',
    title: 'React Старт — W3Schools українською',
    url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
    description:
      'Підручник React. Запустити програму React. Зміни програму React. Що далі?',
  },
];

const Task5 = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Результати пошуку</h2>
      <div className={styles.resultsBlock}>
        {results.map((item, index) => (
          <div key={index} className={styles.resultItem}>
            <div className={styles.domainRow}>
              <img
                src={`https://www.google.com/s2/favicons?domain=${
                  new URL(item.url).hostname
                }&sz=32`}
                alt="favicon"
                className={styles.favicon}
              />
              <span className={styles.domain}>
                {item.domain} — Переклад сторінки
              </span>
            </div>
            <a
              href={item.url}
              className={styles.title}
              target="_blank"
              rel="noreferrer"
            >
              {item.title}
            </a>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task5;
