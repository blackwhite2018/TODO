import React, { useState } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

const Task = ({
  handlePauseTask,
  handlePlayTask,
  handleCompletedTask,
  handleRemoveTask,
  handleEditingTask,
  id_,
  status,
  description,
  created,
  time,
}: any): JSX.Element => {
  const [value, setValue] = useState<string>(description);

  const handleToggleCompleteTask = (): void => {
    if (handleCompletedTask && id_) handleCompletedTask(id_);
  };

  const handleRemove = (): void => {
    if (handleRemoveTask && id_) handleRemoveTask(id_);
  };

  const handleChangeValue = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    const { target }: any = evt;
    if (handleEditingTask && id_) {
      if (evt.keyCode === 13) {
        handleEditingTask(id_, target.value);
      }
    }
  };

  const handleChangeData = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = evt;
    setValue(target.value);
  };

  const handlePlay = () => {
    if (id_) handlePlayTask(id_);
  };

  const handlePause = () => {
    if (id_) handlePauseTask(id_);
  };

  return (
    <li className={status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={status === 'completed'}
          onChange={handleToggleCompleteTask}
        />
        <label>
          <span className="title">{description}</span>
          <span className="description">
            <button type="button" onClick={handlePlay} className="icon icon-play" />
            <button type="button" onClick={handlePause} className="icon icon-pause" />
            {time}
          </span>
          <span className="description">{formatDistanceToNow(new Date(created))}</span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={handleRemove} />
      </div>
      {status === 'editing' && (
        <input type="text" className="edit" onChange={handleChangeData} onKeyUp={handleChangeValue} value={value} />
      )}
    </li>
  );
};

export default Task;
