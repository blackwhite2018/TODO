import React from 'react';

import TasksFilter from './../TasksFilter';
import './index.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter currentFilter='All' />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
