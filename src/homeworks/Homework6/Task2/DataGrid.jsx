import { useState, useMemo, useDeferredValue, useCallback } from 'react';
import useFetch from '../../../hooks/useFetch';
import GridRow from './GridRow';

const URL = 'https://dummyjson.com/users?limit=1000';
const delay = 1500; // Затримка в мілісекундах

const DataGrid = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  const { data, loading, error } = useFetch(
    hasStarted ? URL : null,
    delay,
    reloadCount,
  );

  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const deferredQuery = useDeferredValue(query);
  const deferredSortKey = useDeferredValue(sortKey);

  const handleSort = useCallback(key => {
    setSortKey(key);
    setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
  }, []);

  const filteredAndSorted = useMemo(() => {
    if (!data || !data.users) return [];

    let result = data.users;

    if (deferredQuery) {
      result = result.filter(row =>
        row.firstName.toLowerCase().includes(deferredQuery.toLowerCase()),
      );
    }

    if (deferredSortKey) {
      result = [...result].sort((a, b) => {
        if (a[deferredSortKey] < b[deferredSortKey])
          return sortDir === 'asc' ? -1 : 1;
        if (a[deferredSortKey] > b[deferredSortKey])
          return sortDir === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, deferredQuery, deferredSortKey, sortDir]);

  return (
    <div className="p-4">
      {!hasStarted && (
        <button
          onClick={() => setHasStarted(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded mb-4 block mx-auto"
        >
          Завантажити користувачів
        </button>
      )}

      {loading && <p className="p-4">Завантаження...</p>}
      {error && <p className="p-4 text-red-500">Помилка: {error}</p>}

      {data && (
        <>
          <input
            className="border p-2 mb-2"
            placeholder="Фільтр за ім'ям..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          <div className="space-x-2 mb-2">
            <button
              className="px-2 py-1 border"
              onClick={() => handleSort('id')}
            >
              Сортувати за ID
            </button>
            <button
              className="px-2 py-1 border"
              onClick={() => handleSort('firstName')}
            >
              Сортувати за ім'ям
            </button>
            <button
              className="px-2 py-1 border"
              onClick={() => handleSort('email')}
            >
              Сортувати за email
            </button>
            <button
              onClick={() => setReloadCount(prev => prev + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
            >
              Оновити користувачів
            </button>
          </div>

          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border px-2">ID</th>
                <th className="border px-2">Name</th>
                <th className="border px-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSorted.map(row => (
                <GridRow key={row.id} row={row} query={deferredQuery} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DataGrid;
