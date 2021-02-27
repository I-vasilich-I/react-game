/* eslint-disable react/prop-types */
import React from 'react';
import { getInitialBoardArray, setValueInLocalStorage } from './utils/helpers';

const Header = (props) => {
  const { bestScore, boardSize, history, setHistory } = props;
  const current = history[history.length - 1];
  const { score } = current;

  const newGame = () => {
    setHistory([
      {
        board: getInitialBoardArray(boardSize * boardSize),
        score: 0,
        win: false,
        gameOver: false,
      },
    ]);
  };

  const stepBack = () => {
    if (history.length < 2) return;
    setHistory(history.slice(0, history.length - 1));
    setValueInLocalStorage('2048-history', history.slice(0, history.length - 1));
  };

  return (
    <header className="header">
      <div className="header__top">
        <h2 className="logo">2048</h2>
        <div className="score__container">
          <div className="score">{score}</div>
          <div className="score">{bestScore}</div>
        </div>
      </div>
      <div className="header__bottom">
        {/* <p className="title">Start new game.</p> */}
        <button type="button" className="button" onClick={newGame}>
          New Game
        </button>
        <button type="button" className="button" onClick={stepBack}>
          Step back
        </button>
      </div>
    </header>
  );
};

export default Header;
