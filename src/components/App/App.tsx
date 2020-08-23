import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import shortid from 'shortid';


import Header from './../Header';
import Footer from './../Footer';
import TaskList from './../TaskList';

import CompletedTask from './../context/CompletedTask';
import RemoveTask from './../context/RemoveTask';
import TaskTypes from './../interfaces/ITask';
import './index.css';

const App: React.FC = () => {
  const [tasks, setTask] = useState<Array<TaskTypes>>([
    {
      status: 'completed',
      description: 'Completed task',
      created: `${formatDistanceToNow(new Date(2014, 6, 2))}`
    },
    {
      status: 'editing',
      description: 'Editing task',
      created: `${formatDistanceToNow(new Date(2015, 0, 1, 0, 0, 15))} `
    },
    {
      description: 'Active task',
      created: `${formatDistanceToNow(new Date(2016, 0, 1))}`
    }
  ]);

  useEffect(() => {
    setTask(tasks.reduce((acc: Array<TaskTypes>, task: TaskTypes) => ([...acc, {
      id_: shortid.generate(),
      ...task
    }]), []));
  }, []);

  const handleCompletedTask = (id: string | null): void => {
    const copy = [...tasks];
    const index = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    const status = copy[index].status;

    copy[index].status = status === 'completed' ? '' : 'completed';
    setTask(copy);
  };

  const handleRemoveTask = (id: string | null): void => {
    const copy = [...tasks];
    const index = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    if (index !== -1) {
      copy.splice(index, 1);
      setTask(copy);
    }
  };

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <CompletedTask.Provider value={handleCompletedTask}>
          <RemoveTask.Provider value={handleRemoveTask}>
            <TaskList tasks={tasks} />
          </RemoveTask.Provider>
        </CompletedTask.Provider>
        <Footer />
      </section>
    </section>
  );
};

export default App;
