import TaskBox from '../../components/TaskBox/TaskBox';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';
import Task5 from './Task5/Task5';
// import Task6 from './Task6/Task6';

const Homework2 = () => {
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
      <TaskBox taskNum={5}>
        <Task5 />
      </TaskBox>
      {/* <TaskBox taskNum={6}>
        <Task6 />
      </TaskBox> */}
    </>
  );
};

export default Homework2;
