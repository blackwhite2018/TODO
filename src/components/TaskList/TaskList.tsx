import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import TaskTypes from './../interfaces/ITask';
import Task from './../Task';
import './index.css';

const TaskList: React.FC = () => {
  const [tasks, setTask] = useState<Array<TaskTypes>>([
    {
      status: 'completed',
      description: 'Completed task',
      created: `${formatDistanceToNow(new Date(2014, 6, 2))}`
    },
    {
      status: 'editing',
      description: 'Editing task',
      created: `${formatDistanceToNow(new Date(2015, 0, 1, 0, 0, 15))} `
    },
    {
      description: 'Active task',
      created: `${formatDistanceToNow(new Date(2016, 0, 1))}`
    }
  ]);

  return (
    <ul className="todo-list">
      {tasks.map((task: TaskTypes) => (
        <Task {...task} />
      ))}
    </ul >
  );
};

export default TaskList;
