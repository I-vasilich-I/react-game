import React from 'react';
import Board from './Board';
import Header from './Header';

const App = () => (
  <div className="App">
    <h1 className="hidden">2048</h1>
    <Header />
    <Board />
  </div>
);

export default App;
