import React, { useState, useContext } from 'react';

import CompletedTask from './../context/CompletedTask';
import EditidTask from './../context/EditidTask';
import RemoveTask from './../context/RemoveTask';
import TaskTypes from './../interfaces/ITask';

type fnType = ((id: string | null, value?: string) => void) | null;

const Task = ({ id_, status, description, created }: TaskTypes): JSX.Element => {
  const [value, setValue] = useState<string>(description);
  const completedTask = useContext<fnType>(CompletedTask);
  const removeTask = useContext<fnType>(RemoveTask);
  const editidTask = useContext<((id: string | null, value: string) => void) | null>(EditidTask);

  const handleToggleCompleteTask = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (completedTask && id_)
      completedTask(id_);
  }

  const handleRemoveTask = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    if (removeTask && id_)
      removeTask(id_);
  };

  const handleChangeValue = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    const target: any = evt.target;
    if (editidTask && id_) {
      if (evt.keyCode === 13) {
        editidTask(id_, target.value)
      }
    }
  };

  const handleChangeData = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const target: any = evt.target;
    setValue(target.value);
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
      {status === 'editing' && <input type="text" className="edit" onChange={handleChangeData} onKeyUp={handleChangeValue} value={value} />}
    </li>
  );
};

export default Task;
