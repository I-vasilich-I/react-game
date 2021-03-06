/* eslint-disable react/prop-types */
import React from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import MenuIcon from '@material-ui/icons/Menu';
import { getInitialBoardArray, setValueInLocalStorage } from './utils/helpers';

const Header = ({
  setIsPopUpActive,
  bestScore,
  boardSize,
  history,
  setHistory,
  stepBackButton,
}) => {
  const currentBestScore = bestScore ? bestScore[bestScore.length - 1] : 0;
  const { score } = history[history.length - 1];

  const popUp = () => {
    setIsPopUpActive(true);
  };

  const newGame = () => {
    const newHistory = [
      {
        board: getInitialBoardArray(boardSize * boardSize),
        score: 0,
        win: false,
        gameOver: false,
      },
    ];
    setHistory(newHistory);
    setValueInLocalStorage('2048-history', newHistory);
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
        <button type="button" className="button button--nav" onClick={popUp}>
          <MenuIcon fontSize="inherit" />
        </button>
        <button type="button" className="button button--nav" onClick={newGame}>
          <FiberNewOutlinedIcon fontSize="inherit" />
        </button>
        <button
          type="button"
          className={`${stepBackButton === '1' ? 'button button--nav' : 'button button--hidden'}`}
          onClick={stepBack}
        >
          <ReplyIcon fontSize="inherit" />
        </button>
        <button type="button" className="button button--nav" onClick={fullScreen}>
          <FullscreenIcon fontSize="inherit" />
        </button>
      </div>
    </header>
  );
};

export default Header;
