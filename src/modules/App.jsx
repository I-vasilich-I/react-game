import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import { getInitialBoardArray, getBestScoreFromStorage } from './utils/helpers';

const App = () => {
  const [boardSize, setBoardSize] = useState(4);
  const [bestScore, setBestScore] = useState(getBestScoreFromStorage());
  const [history, setHistory] = useState([
    {
      board: getInitialBoardArray(boardSize * boardSize),
      score: 0,
      win: false,
      gameOver: false,
    },
  ]);

  return (
    <div className="App">
      <h1 className="hidden">2048</h1>
      <Header
        bestScore={bestScore}
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        history={history}
        setHistory={setHistory}
      />
      <Board history={history} boardSize={boardSize} />
      <Footer
        bestScore={bestScore}
        setBestScore={setBestScore}
        boardSize={boardSize}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
};

export default App;
