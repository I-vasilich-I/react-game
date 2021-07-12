/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import SimpleSelect from './SimpleSelect';
import WinningNumberRadio from './WinningNumberRadio';
import StepBackRadio from './StepBackRadio';

const PopUp = (props) => {
  const {
    isPopUpActive,
    setIsPopUpActive,
    bestScore,
    boardSize,
    setBoardSize,
    setHistory,
    winningNumber,
    setWinningNumber,
    stepBackButton,
    setStepBackButton,
  } = props;
  const popupClassName = isPopUpActive ? 'popup blackout' : 'popup popup--hidden';
  const bestScoreArray = bestScore.slice(bestScore.length - 10, bestScore.length);

  const handleClick = (e) => {
    if (e.target.className === 'popup blackout') setIsPopUpActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className={popupClassName}>
      <div className="popup__container">
        <div className="radio">
          <WinningNumberRadio winningNumber={winningNumber} setWinningNumber={setWinningNumber} />
        </div>
        <div className="radio">
          <StepBackRadio stepBackButton={stepBackButton} setStepBackButton={setStepBackButton} />
        </div>
        <SimpleSelect
          setIsPopUpActive={setIsPopUpActive}
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          setHistory={setHistory}
        />
        <div className="best-score__list">
          Best score:
          {bestScoreArray.reverse().map((elem, id) => (
            <div key={id + 1} className="best-score__item">
              <div className="best-score__id">{id + 1}</div>
              <div className="best-score__score">{elem}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
