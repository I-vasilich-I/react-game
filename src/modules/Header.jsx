/* eslint-disable react/prop-types */
import React from 'react';
import { getInitialBoardArray, setValueInLocalStorage } from './utils/helpers';

const Header = (props) => {
  const { setIsPopUpActive, bestScore, boardSize, history, setHistory } = props;
  const currentBestScore = bestScore ? bestScore[bestScore.length - 1] : 0;
  const current = history[history.length - 1];
  const { score } = current;

  const popUp = () => {
    setIsPopUpActive(true);
  };

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

  const fullScreen = () => {
    document.body.requestFullscreen();
  };

  return (
    <header className="header">
      <div className="header__top">
        <h2 className="logo">2048</h2>
        <div className="score__container">
          <div className="score">
            <p className="score__title">Score</p>
            <p className="score__count">{score}</p>
          </div>
          <div className="score">
            <p className="score__title">Best score</p>
            <p className="score__count">{currentBestScore}</p>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        {/* <p className="title">Start new game.</p> */}

        <button type="button" className="button button--menu" onClick={popUp}>
          Menu
        </button>
        <button type="button" className="button" onClick={newGame}>
          New Game
        </button>
        <button type="button" className="button" onClick={stepBack}>
          Step back
        </button>
        <button type="button" className="button" onClick={fullScreen}>
          Full screen
        </button>
      </div>
    </header>
  );
};

export default Header;
