import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import { getInitialBoardArray, getBestScoreFromStorage } from './utils/helpers';

const App = () => {
  const [boardSize, setBoardSize] = useState(5);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(getBestScoreFromStorage());
  const [board, setBoard] = useState(getInitialBoardArray(boardSize * boardSize));
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

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
      <Board
        board={board}
        setBoard={setBoard}
        boardSize={boardSize}
      />
      <Footer
        board={board}
        setBoard={setBoard}
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        boardSize={boardSize}
      />
    </div>
  );
};

export default App;
