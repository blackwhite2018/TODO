import React, { useState } from 'react';

import IHeaderProps from '../interfaces/IHeaderProps';
import './index.css';

const NewTaskForm = ({ handleAddTask }: IHeaderProps) => {
  const [value, setValue] = useState<string>('');

  const handleAdd = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (evt.keyCode === 13 && handleAddTask) {
      const { target }: any = evt;
      handleAddTask(target.value);
      setValue('');
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = evt;
    setValue(target.value);
  };

  return (
    <input
      className="new-todo"
      placeholder="Task"
      value={value}
      autoFocus
      onChange={handleChange}
      onKeyUp={handleAdd}
    />
  );
};

export default NewTaskForm;
