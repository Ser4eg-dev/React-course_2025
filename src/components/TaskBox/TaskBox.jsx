const TaskBox = ({ children, taskNum }) => {
  return (
    <div style={{ margin: '20px 0 20px' }}>
      <hr />
      <h2 style={{ textAlign: 'center' }}>Задача №{taskNum}</h2>
      {children}
      <hr />
    </div>
  );
};

export default TaskBox;
