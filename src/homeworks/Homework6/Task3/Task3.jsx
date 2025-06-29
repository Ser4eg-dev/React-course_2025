import useWindowSize from '../../../hooks/useWindowSize';
import { FiMonitor, FiTablet, FiSmartphone } from 'react-icons/fi';
const Task3 = () => {
  const { width, height } = useWindowSize();

  let device = 'Desktop';
  if (width < 768) {
    device = 'Smartphone';
  } else if (width >= 768 && width <= 1023) {
    device = 'Tablet';
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Розміри вікна:</h2>
      <p className="text-xl mb-4">
        {width} x {height}px
      </p>

      {device === 'Desktop' && (
        <FiMonitor size={64} className="mx-auto text-blue-600" />
      )}
      {device === 'Tablet' && (
        <FiTablet size={64} className="mx-auto text-green-600" />
      )}
      {device === 'Smartphone' && (
        <FiSmartphone size={64} className="mx-auto text-purple-600" />
      )}

      <p className="mt-2 text-lg">Тип пристрою: {device}</p>
    </div>
  );
};

export default Task3;
