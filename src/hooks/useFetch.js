import { useEffect, useState } from 'react';

const useFetch = (url, delay = 0, reloadCount = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) return; //Якщо URL немає — виходимо, запит не робимо

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();

        // Умовна затримка для наочності (опціонально)
        if (delay > 0) {
          await new Promise(res => setTimeout(res, delay));
        }

        setData(json);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Запит скасовано.');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, delay, reloadCount]);

  return { data, loading, error };
};

export default useFetch;
