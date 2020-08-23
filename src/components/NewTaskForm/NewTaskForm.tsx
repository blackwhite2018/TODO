import React from 'react';

import './index.css';

const NewTaskForm: React.FC = () => {
  return (
    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
  );
};

export default NewTaskForm;
