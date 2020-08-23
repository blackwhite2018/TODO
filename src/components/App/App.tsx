import React from 'react';

import Header from './../Header';
import Footer from './../Footer';
import TaskList from './../TaskList';
import './index.css';

const App: React.FC = () => {
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
};

export default App;
