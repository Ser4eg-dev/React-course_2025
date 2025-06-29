import { useMemo, useState } from 'react';
import ResultDisplay from './ResultDisplay';
import useInput from '../../../hooks/useInput';

const Task1 = () => {
  const a = useInput(0);
  const b = useInput(0);

  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    return Number(a.value) + Number(b.value);
  }, [a.value, b.value]);

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 p-6 border rounded-lg shadow bg-white space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Калькулятор з useMemo, memo і кастомним хукoм useInput
      </h2>

      <div className="space-y-2">
        <label className="flex flex-col">
          <span className="text-sm text-gray-600">A:</span>
          <input
            type="number"
            value={a.value}
            onChange={a.onChange}
            className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-600">B:</span>
          <input
            type="number"
            value={b.value}
            onChange={b.onChange}
            className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
      </div>

      <ResultDisplay result={sum} />

      <div className="space-x-4">
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Збільшити лічильник ({counter})
        </button>

        <button
          onClick={() => {
            a.onReset();
            b.onReset();
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Скинути A і B
        </button>
      </div>
    </div>
  );
};

export default Task1;
