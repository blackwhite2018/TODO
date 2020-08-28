import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import Header from '../Header';
import Footer from '../Footer';
import TaskList from '../TaskList';

import TaskTypes from '../interfaces/ITask';
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
      created: '2014, 6, 2',
      time: 0,
      timerID: 0,
      timer: true,
    },
    {
      status: 'active',
      description: 'Editing task',
      created: '2015, 1, 1',
      time: 0,
      timerID: 0,
      timer: false,
    },
    {
      status: 'active',
      description: 'Active task',
      created: '2016, 2, 1',
      time: 0,
      timerID: 0,
      timer: false,
    },
  ]);

  useEffect(() => {
    const taskIds: Array<TaskTypes> = tasks.reduce(
      (acc: Array<TaskTypes>, task: TaskTypes) => [
        ...acc,
        {
          id_: shortid.generate(),
          ...task,
        },
      ],
      []
    );

    setTask(taskIds);
    setFilterList(createFilterList(taskIds, filter));
  }, []);

  useEffect(() => {
    const counter: number = tasks.reduce((acc, task: TaskTypes): number => {
      if (task.status !== 'completed') return acc + 1;
      return acc;
    }, 0);
    setCount(counter);
    const copy: any = [...tasks].reduce((acc: any, task): any => {
      return [
        ...acc,
        {
          ...task,
          timerID: !task.timer
            ? 0
            : setInterval(() => {
                setTask(copy);
                setFilterList(createFilterList(copy, filter));
              }, 1000),
          time: task.timer ? task.time : task.time + 1,
        },
      ];
    }, []);
    return () => {
      copy.forEach((task: TaskTypes) => {
        clearInterval(task.timerID);
      });
      setFilterList(createFilterList(copy, filter));
    };
  }, [tasks]);

  const handleCompletedTask = (id: string | null): void => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    const { status } = copy[index];

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
    const id = shortid.generate();
    const date = new Date();
    const newTask: TaskTypes = {
      id_: id,
      status: 'Active',
      description: value,
      created: `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`,
      timerID: 0,
      time: 0,
      timer: false,
    };
    const copy = [...tasks, newTask];
    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  const handlePauseTask = (id: string) => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    if (index !== -1) {
      if (!copy[index].timer) {
        copy[index].timerID = setInterval(() => {
          copy[index].time += 1;
        }, 1000);
        copy[index].timer = true;
      }
    }
    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  const handlePlayTask = (id: string) => {
    const copy: Array<TaskTypes> = [...tasks];
    const index: number = tasks.findIndex(({ id_ }: TaskTypes) => id_ === id);
    if (index !== -1) {
      if (copy[index].timer) {
        clearInterval(copy[index].timerID);
        copy[index].timer = false;
      }
    }
    setTask(copy);
    setFilterList(createFilterList(copy, filter));
  };

  return (
    <section className="todoapp">
      <Header handleAddTask={handleAddTask} />
      <section className="main">
        <TaskList
          tasks={filterList}
          handleCompletedTask={handleCompletedTask}
          handleRemoveTask={handleRemoveTask}
          handleEditingTask={handleEditingTask}
          handlePlayTask={handlePlayTask}
          handlePauseTask={handlePauseTask}
        />
        <Footer
          removeAllCompletedTask={handleRemoveAllCompletedTask}
          counter={count}
          currentFilter={filter}
          handleSetFilter={handleSetFilter}
        />
      </section>
    </section>
  );
};

export default App;
