import React from 'react';
import Header from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';

/**
 * @returns {JSX} Application form
 */
function App() {
  return (
    <div className="container">
      <Header />
      <VisibleTodoList />
    </div>
  );
}


export default App;
