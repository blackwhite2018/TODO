import React from 'react';

import TaskTypes from './../interfaces/ITask';
import Task from './../Task';
import './index.css';

const TaskList: React.FC<{ tasks: Array<TaskTypes> }> = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map(({ id_, ...task }: TaskTypes) => (
        <Task key={id_} id_={id_} {...task} />
      ))}
    </ul >
  );
};

export default TaskList;
