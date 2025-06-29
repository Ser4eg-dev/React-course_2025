import './Task1.css';
import { useState, useRef, useEffect } from 'react';

const users = [
  { login: 'admin', password: '1234' },
  { login: 'ivan', password: '1234' },
];

const Task1 = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const loginInputRef = useRef(null);

  useEffect(() => {
    loginInputRef.current?.focus();
  }, []);

  const handleLogin = e => {
    e.preventDefault();

    const found = users.find(
      user => user.login === login && user.password === password,
    );

    if (found) {
      setMessage('😊 Вітаємо!');
      setColor('green');
    } else {
      if (login === 'ivan') {
        setMessage('Невірні логін або пароль');
        setColor('blue');
      } else {
        setMessage('Невірні логін або пароль');
        setColor('red');
      }
    }

    setLogin('');
    setPassword('');
    loginInputRef.current?.focus();
  };

  return (
    <div className="bg-container">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Форма авторизації</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Логін"
              value={login}
              onChange={e => setLogin(e.target.value)}
              ref={loginInputRef}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Увійти
          </button>
          <div style={{ marginTop: '20px', color }}>{message}</div>
        </form>
      </div>
      <div style={{ marginTop: '30px' }} className="wrapper">
        <h4 style={{ marginBottom: '15px' }}>
          Доступні облікові записи для тестування:
        </h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Логін:</strong> {user.login} — <strong>Пароль:</strong>{' '}
              {user.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task1;
