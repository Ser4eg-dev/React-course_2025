import { Link } from 'react-router-dom';
import styles from './HomeworkBox.module.css';

const HomeworkBox = ({ children, title = 'Домашня робота', path }) => {
  return (
    <Link to={`/${path}`} className={styles.container}>
      <h2 className={styles.mb}>{title}</h2>
      {children}
    </Link>
  );
};

export default HomeworkBox;
