import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import shortid from 'shortid';


import Header from './../Header';
import Footer from './../Footer';
import TaskList from './../TaskList';

import CompletedTask from './../context/CompletedTask';
import RemoveTask from './../context/RemoveTask';
import EditidTask from './../context/EditidTask';
import SetFilter from './../context/SetFilter';
import AddTask from './../context/AddTask';
import TaskTypes from './../interfaces/ITask';
import './index.css';

const createFilterList = (list: Array<TaskTypes>, filterName: string): Array<TaskTypes> => {
  let filterList: Array<TaskTypes> = [];

  switch (filterName) {
    case 'All':
      filterList = list;
      break;
    default:
      filterList = list.filter(({ status }: TaskTypes) => {
        if (status) {
          return status[0].toUpperCase() + status.substr(1) === filterName;
        }
        return false;
      });
      break;
  }

  return filterList;
};

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [filter, setFilter] = useState<string>('All');
  const [filterList, setFilterList] = useState<Array<TaskTypes>>([]);
  const [tasks, setTask] = useState<Array<TaskTypes>>([
    {
      status: 'completed',
      description: 'Completed task',
      created: `${formatDistanceToNow(new Date(2014, 6, 2))}`
    },
    {
      status: 'active',
      description: 'Editing task',
      created: `${formatDistanceToNow(new Date(2015, 0, 1, 0, 0, 15))} `
    },
    {
      status: 'active',
      description: 'Active task',
      created: `${formatDistanceToNow(new Date(2016, 0, 1))}`
    }
  ]);

  useEffect(() => {
    const taskIds: Array<TaskTypes> = tasks.reduce((acc: Array<TaskTypes>, task: TaskTypes) => ([...acc, {
      id_: shortid.generate(),
      ...task
    }]), []);

    setTask(taskIds);
    setFilterList(createFilterList(taskIds, filter));
  }, []);

  useEffect(() => {
    const counter: number = tasks.reduce((acc, task: TaskTypes): number => {
      if (task.status !== 'completed')
        acc++;
      return acc;
    }, 0);
    setCount(counter);
  }, [tasks]);

  const handleCompletedTask = (id: string | null): void => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    const status: string | undefined = copy[index].status;

    copy[index].status = status === 'completed' ? 'active' : 'completed';
    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  const handleRemoveTask = (id: string | null): void => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    if (index !== -1) {
      copy.splice(index, 1);
      setTask(copy);
      setFilterList(createFilterList(copy, filter));
    }
  };

  const handleRemoveAllCompletedTask = (): void => {
    const copy: Array<TaskTypes> = [...tasks].filter(({ status }: TaskTypes) => status !== 'completed');

    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  const handleSetFilter = (filterName: string): void => {
    setFilter(filterName);
    setFilterList(createFilterList([...tasks], filterName));
  };

  const handleEditingTask = (id: string | null, value: string): void => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);

    copy[index].status = 'Active';
    copy[index].description = value;
    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  const handleAddTask = (value: string): void => {
    const newTask: TaskTypes = {
      id_: shortid.generate(),
      status: 'Active',
      description: value,
      created: formatDistanceToNow(new Date())
    };
    setTask([...tasks, newTask]);
    setFilterList(createFilterList([...tasks, newTask], filter));
  };

  return (
    <section className="todoapp">
      <AddTask.Provider value={handleAddTask}>
        <Header />
      </AddTask.Provider>
      <section className="main">
        <CompletedTask.Provider value={handleCompletedTask}>
          <RemoveTask.Provider value={handleRemoveTask}>
            <EditidTask.Provider value={handleEditingTask}>
              <TaskList tasks={filterList} />
            </EditidTask.Provider>
          </RemoveTask.Provider>
        </CompletedTask.Provider>
        <SetFilter.Provider value={handleSetFilter}>
          <Footer
            removeAllCompletedTask={handleRemoveAllCompletedTask}
            counter={count}
            currentFilter={filter}
          />
        </SetFilter.Provider>
      </section>
    </section>
  );
};

export default App;
