import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

/**
 * @returns {JSX} Application form
 */
function App() {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}


export default App;
