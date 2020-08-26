import React, { useState, useContext } from 'react';

import AddTask from './../context/AddTask';
import './index.css';

const NewTaskForm: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const addTask = useContext<((value: string) => void) | null>(AddTask);

  const handleAddTask = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (evt.keyCode === 13 && addTask) {
      const target: any = evt.target;
      addTask(target.value);
      setValue('');
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const target: any = evt.target;
    setValue(target.value);
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={value}
      autoFocus
      onChange={handleChange}
      onKeyUp={handleAddTask}
    />
  );
};

export default NewTaskForm;
