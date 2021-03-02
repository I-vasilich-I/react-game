/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

const PopUp = (props) => {
  const { isPopUpActive, setIsPopUpActive, bestScore } = props;
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
  }, ['mousedown', handleClick]);

  return (
    <div className={popupClassName}>
      <div className="popup__container">
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
