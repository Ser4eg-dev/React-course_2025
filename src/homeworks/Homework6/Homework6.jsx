import TaskBox from '../../components/TaskBox/TaskBox';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';

const Homework6 = () => {
  return (
    <>
      <TaskBox taskNum={1}>
        <Task1 />
      </TaskBox>
      <TaskBox taskNum={2}>
        <Task2 />
      </TaskBox>
      <TaskBox taskNum={3}>
        <Task3 />
      </TaskBox>
      <TaskBox taskNum={4}>
        <Task4 />
      </TaskBox>
    </>
  );
};

export default Homework6;
