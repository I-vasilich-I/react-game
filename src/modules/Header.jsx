/* eslint-disable react/prop-types */
import React from 'react';
import { getInitialBoardArray } from './utils/helpers';

const Header = (props) => {
  const { score, setScore, setBoard, bestScore } = props;

  const newGame = () => {
    setBoard(getInitialBoardArray());
    setScore(0);
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
        <p className="title">Start new game.</p>
        <button type="button" className="button" onClick={newGame}>
          New Game
        </button>
      </div>
    </header>
  );
};

export default Header;
