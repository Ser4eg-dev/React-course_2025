import { useState, useMemo } from 'react';
import useDebounce from '../../../hooks/useDebounce';

const Task4 = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  const items = useMemo(
    () => Array.from({ length: 30 }, (_, i) => `Приклад ${i + 1}`),
    [],
  );
  const filtered = useMemo(
    () =>
      items.filter(item =>
        item.toLowerCase().includes(debouncedInput.toLowerCase()),
      ),
    [debouncedInput, items],
  );

  return (
    <div className="p-4">
      <label className="block mb-2">Пошук:</label>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border px-2 py-1 mb-4"
      />

      <div className="flex flex-wrap gap-2">
        {filtered.map(item => (
          <span key={item} className="px-2 py-1 bg-gray-200 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Task4;
