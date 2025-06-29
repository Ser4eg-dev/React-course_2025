import { memo } from 'react';

function ResultDisplay({ result }) {
  console.log('ResultDisplay ========== ');
  return <h3>Результат A + B = {result}</h3>;
}

export default memo(ResultDisplay);
