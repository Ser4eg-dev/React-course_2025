import { useState, useCallback } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const handleReset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue,
    onChange: handleChange,
    onReset: handleReset,
  };
};

export default useInput;
