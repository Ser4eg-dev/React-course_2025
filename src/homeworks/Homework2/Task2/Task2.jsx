import './Task2.css';
import { useState } from 'react';
const Task2 = () => {
  const [ticketClass, setTicketClass] = useState('');
  const [wantsNewspaper, setWantsNewspaper] = useState(false);
  const [wantsCognac, setWantsCognac] = useState(false);
  const [wantsSnack, setWantsSnack] = useState(false);
  const [beerType, setBeerType] = useState('light');
  const [wantsChips, setWantsChips] = useState(false);

  const isBusiness = ticketClass === 'business';
  const isEconomy = ticketClass === 'economy';

  return (
    <div
      className={`form-container ${
        isBusiness ? 'business-bg' : isEconomy ? 'economy-bg' : ''
      }`}
    >
      <h2>Оберіть клас квитка</h2>
      <select
        value={ticketClass}
        onChange={e => setTicketClass(e.target.value)}
      >
        <option value="">-- Виберіть клас --</option>
        <option value="business">Бізнес</option>
        <option value="economy">Економ</option>
      </select>

      {isBusiness && (
        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={wantsNewspaper}
              onChange={e => setWantsNewspaper(e.target.checked)}
            />
            Газета
          </label>

          <label>
            <input
              type="checkbox"
              checked={wantsCognac}
              onChange={e => setWantsCognac(e.target.checked)}
            />
            Коньяк
          </label>

          {wantsCognac && (
            <label>
              Закуска?
              <select
                value={wantsSnack ? 'yes' : 'no'}
                onChange={e => setWantsSnack(e.target.value === 'yes')}
              >
                <option value="no">Ні</option>
                <option value="yes">Так</option>
              </select>
            </label>
          )}
        </div>
      )}

      {isEconomy && (
        <div className="options">
          <label>
            Тип пива:
            <select
              value={beerType}
              onChange={e => setBeerType(e.target.value)}
            >
              <option value="light">Світле</option>
              <option value="dark">Темне</option>
            </select>
          </label>

          <label>
            <input
              type="checkbox"
              checked={wantsChips}
              onChange={e => setWantsChips(e.target.checked)}
            />
            Чипси
          </label>
        </div>
      )}
    </div>
  );
};

export default Task2;
