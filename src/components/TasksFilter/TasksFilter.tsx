import React, { useContext } from 'react';

import SetFilter from './../context/SetFilter';
import TaskFilterTypes from './../interfaces/ITaskFilterTypes';
import './index.css';

const filters: Array<string> = ['All', 'Active', 'Completed'];

const TasksFilter = ({ currentFilter }: TaskFilterTypes): JSX.Element => {
  const setFilterContext = useContext(SetFilter);
  console.log(currentFilter);

  const handleSetFilter = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    if (setFilterContext) {
      const target: any = evt.target;
      setFilterContext(target.dataset.filter);
    }
  };

  const filtersList: Array<JSX.Element> = filters.map((filter: string) => (
    <li>
      <button className={currentFilter === filter ? 'selected' : ''} onClick={handleSetFilter} data-filter={filter} >{filter}</button>
    </li>
  ));

  return (
    <ul className="filters">
      {filtersList}
    </ul>
  );
};

export default TasksFilter;
