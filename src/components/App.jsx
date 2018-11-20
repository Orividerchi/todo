import React from 'react';
import Header from './Header';
import Product from '../containers/Product';

/**
 * @returns {JSX} Application form
 */
function App() {
  return (
    <div className="container">
      <Header />
      <Product />
    </div>
  );
}


export default App;
