import TaskBox from '../../components/TaskBox/TaskBox';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';

const Homework3 = () => {
  return (
    <>
      <TaskBox taskNum={1}>
        <Task1 />
      </TaskBox>
      <TaskBox taskNum={2}>
        <Task2 />
      </TaskBox>
    </>
  );
};

export default Homework3;
