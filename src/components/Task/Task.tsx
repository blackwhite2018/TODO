import React, { useContext } from 'react';

import CompletedTask from './../context/CompletedTask';
import RemoveTask from './../context/RemoveTask';
import TaskTypes from './../interfaces/ITask';

const Task = ({ id_ = null, status, description, created }: TaskTypes): JSX.Element => {
  const completedTask = useContext(CompletedTask);
  const removeTask = useContext(RemoveTask);

  const handleToggleCompleteTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (completedTask && id_)
      completedTask(id_);
  };

  const handleRemoveTask = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (removeTask && id_)
      removeTask(id_);
  };

  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={status === 'completed'} onChange={handleToggleCompleteTask} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {created} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={handleRemoveTask}></button>
      </div>
      {status === 'editing' && <input type="text" className="edit" value="Editing task" />}
    </li>
  );
};

export default Task;
