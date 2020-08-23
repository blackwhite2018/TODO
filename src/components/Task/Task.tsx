import React from 'react';

import TaskTypes from './../interfaces/ITask';

const Task = ({ status, description, created }: TaskTypes): JSX.Element => {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {created} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {status === 'editing' && <input type="text" className="edit" value="Editing task" />}
    </li>
  );
};

export default Task;
