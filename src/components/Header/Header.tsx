import React from 'react';

import NewTaskForm from './../NewTaskForm';
import './index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>className</h1>
      <NewTaskForm />
    </header>
  );
};

export default Header;
