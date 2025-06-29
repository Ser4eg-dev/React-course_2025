import { useState, useEffect, useRef } from 'react';
import styles from './Task1.module.css';

const defaultBotMessages = [
  'Чудово! Отже, я буду надсилати повідомлення після того як ти щось відправиш. Ти маєш змогу редагувати своє відправлене повідомлення клікнув на ньому 2 рази',
  'Як працює useEffect?',
  'Різниця між props і state?',
  'Що таке JSX?',
  'Для чого потрібен useState?',
  'Що таке компонент у React?',
  'Як реалізувати роутинг?',
  'Яка різниця між класовим і функціональним компонентом?',
  'Що таке key у списках?',
  'Як працює React.memo?'
];

let messageId = 0;

const createMessage = (text, sender = 'bot') => ({
  id: messageId++,
  text,
  sender,
  likes: 0,
  dislikes: 0,
  isEditing: false
});

const EditField = ({ initial, onSave }) => {
  const [value, setValue] = useState(initial);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        className={styles.editInput}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => onSave(value.trim())}
        onKeyDown={e => {
          if (e.key === 'Enter') onSave(value.trim());
        }}
      />
    </>
  );
};

const Task1 = () => {
  const [messages, setMessages] = useState([
    createMessage(
      'Привіт! Я спробую відтворити онлайн спілкування. Тож для початку - напиши мені щось)',
      'bot'
    )
  ]);
  const [input, setInput] = useState('');
  const [botIndex, setBotIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = createMessage(input.trim(), 'user');
    setMessages(prev => [...prev, userMsg]);
    setInput('');
  };

  const handleLike = id => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  const handleDislike = id => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, dislikes: m.dislikes + 1 } : m))
    );
  };

  const enableEdit = id => {
    setMessages(prev =>
      prev.map(m => (m.id === id ? { ...m, isEditing: true } : m))
    );
  };

  const handleEdit = (id, newText) => {
    setMessages(prev =>
      prev.map(m =>
        m.id === id ? { ...m, text: newText, isEditing: false } : m
      )
    );
  };

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].sender === 'user') {
      const timeout = setTimeout(() => {
        const nextBotMessage =
          defaultBotMessages[botIndex % defaultBotMessages.length];
        setMessages(prev => [...prev, createMessage(nextBotMessage, 'bot')]);
        setBotIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messages, botIndex]);

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={styles.chatWrapper}>
      <h2 className={styles.title}>Чат-React тренажер</h2>
      <div className={styles.messages}>
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.messageRow} ${
              msg.sender === 'user' ? styles.myMessage : styles.aiMessage
            }`}
          >
            <div className={styles.avatar}>
              {msg.sender === 'user' ? 'Ви' : 'AI'}
            </div>

            <div
              className={`${styles.bubble} ${
                msg.sender === 'user' ? styles.myBubble : styles.aiBubble
              }`}
            >
              {msg.isEditing ? (
                <EditField
                  initial={msg.text}
                  onSave={text => handleEdit(msg.id, text)}
                />
              ) : (
                <div
                  className={styles.text}
                  onDoubleClick={() =>
                    msg.sender === 'user' && enableEdit(msg.id)
                  }
                >
                  {msg.text}
                </div>
              )}
              <div className={styles.reactions}>
                <button
                  className={styles.reactionButton}
                  onClick={() => handleLike(msg.id)}
                >
                  👍 {msg.likes}
                </button>
                <button
                  className={styles.reactionButton}
                  onClick={() => handleDislike(msg.id)}
                >
                  👎 {msg.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputArea}>
        <input
          className={styles.inputField}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') sendMessage();
          }}
          placeholder="Напишіть повідомлення..."
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          Надіслати
        </button>
      </div>
    </div>
  );
};

export default Task1;
