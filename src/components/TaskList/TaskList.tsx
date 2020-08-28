import React from 'react';

import TaskTypes from '../interfaces/ITask';
import TaskListProps from '../interfaces/ITaskListProps';
import Task from '../Task';
import './index.css';

const TaskList: React.FC<TaskListProps> = ({
  handlePauseTask,
  handlePlayTask,
  handleCompletedTask,
  handleRemoveTask,
  handleEditingTask,
  tasks,
}) => {
  return (
    <ul className="todo-list">
      {tasks.map(({ id_, ...task }: TaskTypes) => (
        <Task
          key={id_}
          id_={id_}
          {...task}
          handleCompletedTask={handleCompletedTask}
          handleRemoveTask={handleRemoveTask}
          handleEditingTask={handleEditingTask}
          handlePlayTask={handlePlayTask}
          handlePauseTask={handlePauseTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
