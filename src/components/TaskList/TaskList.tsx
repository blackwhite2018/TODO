import React from 'react';

import TaskTypes from './../interfaces/ITask';
import Task from './../Task';
import './index.css';

const TaskList: React.FC<{ tasks: Array<TaskTypes> }> = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task: TaskTypes) => (
        <Task {...task} />
      ))}
    </ul >
  );
};

export default TaskList;
