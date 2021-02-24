import React, { useState, useEffect } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [board, setBoard] = useState([...Array(16).keys()]);


  return (
    <div className="App">
      <h1 className="hidden">2048</h1>
      <Header />
      <Board board={board}/>
      <Footer board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
