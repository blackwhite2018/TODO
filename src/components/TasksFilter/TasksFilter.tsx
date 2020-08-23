import React from 'react';

import TaskFilterTypes from './../interfaces/ITaskFilterTypes';
import './index.css';

const filters: Array<string> = ['All', 'Active', 'Completed'];

const TasksFilter = ({ currentFilter }: TaskFilterTypes): JSX.Element => {
  const filtersList: Array<JSX.Element> = filters.map((filter: string) => (
    <li>
      <button className={currentFilter === filter ? 'selected' : ''}>{filter}</button>
    </li>
  ));

  return (
    <ul className="filters">
      {filtersList}
    </ul>
  );
};

export default TasksFilter;
