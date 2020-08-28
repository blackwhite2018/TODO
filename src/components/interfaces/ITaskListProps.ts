import TaskTypes from './ITask';

export default interface TaskListProps {
  tasks: Array<TaskTypes>;
  handleCompletedTask: Function;
  handleRemoveTask: Function;
  handleEditingTask: Function;
  handlePlayTask: Function;
  handlePauseTask: Function;
}
