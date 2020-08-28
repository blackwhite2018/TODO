import React from 'react';

import IHeaderProps from '../interfaces/IHeaderProps';
import NewTaskForm from '../NewTaskForm';
import './index.css';

const Header = ({ handleAddTask }: IHeaderProps) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm handleAddTask={handleAddTask} />
    </header>
  );
};

export default Header;
