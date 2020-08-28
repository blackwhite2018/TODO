import React from 'react';
import shortid from 'shortid';

import TaskFilterTypes from '../interfaces/ITaskFilterTypes';
import './index.css';

const filters: Array<string> = ['All', 'Active', 'Completed'];

const TasksFilter = ({ handleSetFilter, currentFilter }: TaskFilterTypes): JSX.Element => {
  const handleFilter = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    if (handleSetFilter) {
      const { target }: any = evt;
      handleSetFilter(target.dataset.filter);
    }
  };

  const filtersList: Array<JSX.Element> = filters.map((filter: string) => (
    <li key={shortid.generate()}>
      <button
        type="button"
        className={currentFilter === filter ? 'selected' : ''}
        onClick={handleFilter}
        data-filter={filter}
      >
        {filter}
      </button>
    </li>
  ));

  return <ul className="filters">{filtersList}</ul>;
};

export default TasksFilter;
