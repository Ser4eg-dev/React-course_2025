import HomeworkSection from '../components/HomeworkBox/HomeworkBox';

export default function Homeworks() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Домашні роботи</h1>
      <div
        style={{
          display: 'flex',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        <HomeworkSection title="Домашня робота №2" path="homework2">
          <p>1Форма авторизації</p>
          <p>2Квитки літака</p>
          <p>Тренажер англійської мови</p>
          <p>Список працівників</p>
          <p>Результати пошуку</p>
          <p>Кухня</p>
        </HomeworkSection>
        <HomeworkSection title="Домашня робота №3" path="homework3">
          <p>Динамічний пошук</p>
          <p>Гра Хрестик-Нулик1</p>
        </HomeworkSection>
        <HomeworkSection title="Домашня робота №4" path="homework4">
          <p>Мессенджер</p>
          <p>Гра “Вгадай число”</p>
        </HomeworkSection>
        <HomeworkSection title="Домашня робота №6" path="homework6">
          <p>Калькулятор</p>
          <p>Таблиця з фільтрацією та сортуванням, чутлива до UI</p>
          <p>Розмір вікна браузера</p>
        </HomeworkSection>
      </div>
    </div>
  );
}
