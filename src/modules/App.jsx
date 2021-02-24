import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import { getInitialBoardArray } from './utils/helpers';

const App = () => {
  const [board, setBoard] = useState(getInitialBoardArray());
  // const [board, setBoard] = useState([...Array(16).keys()]);

  return (
    <div className="App">
      <h1 className="hidden">2048</h1>
      <Header />
      <Board board={board} setBoard={setBoard} />
      <Footer board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
