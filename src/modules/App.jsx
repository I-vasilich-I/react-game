import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import { getInitialBoardArray, getBestScoreFromStorage } from './utils/helpers';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(getBestScoreFromStorage());
  const [board, setBoard] = useState(getInitialBoardArray());
  // const [board, setBoard] = useState([...Array(16).keys()]);

  return (
    <div className="App">
      <h1 className="hidden">2048</h1>
      <Header
        score={score}
        setScore={setScore}
        setBoard={setBoard}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <Board board={board} setBoard={setBoard} />
      <Footer
        board={board}
        setBoard={setBoard}
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
};

export default App;
