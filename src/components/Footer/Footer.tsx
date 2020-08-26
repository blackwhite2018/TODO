import React from 'react';

import TasksFilter from '../TasksFilter';
import './index.css';

type FooterProps = {
  removeAllCompletedTask: Function;
  counter: number;
  currentFilter: string;
};

const Footer: React.FC<{
  removeAllCompletedTask: Function;
  counter: number;
  currentFilter: string;
}> = ({ removeAllCompletedTask, counter, currentFilter }: FooterProps) => {
  const handleRemoveAllCompletedTask = (): void => {
    if (removeAllCompletedTask) removeAllCompletedTask();
  };

  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TasksFilter currentFilter={currentFilter} />
      <button type="button" className="clear-completed" onClick={handleRemoveAllCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
