/* eslint-disable react/prop-types */
import React from 'react';
import { getNewBoardArray } from './utils/helpers';

const Footer = (props) => {
  const { board, setBoard } = props;

  const moveLeft = () => {
    const newBoard = getNewBoardArray(board);
    if (newBoard === -1) {
      // should change that console.log later
      console.log('array is full');
      return;
    }
    setBoard(newBoard);
  };
  const moveUp = () => {};
  const moveRight = () => {};
  const moveDown = () => {};

  return (
    <footer className="footer">
      <div className="footer__info">
        HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into
        one when they touch. Add them up to reach 2048!
      </div>
      <div className="button__container">
        <button type="button" className="button button--arrow item-b" onClick={moveLeft}>
          Left
        </button>
        <button type="button" className="button button--arrow item-a" onClick={moveUp}>
          Up
        </button>
        <button type="button" className="button button--arrow item-d" onClick={moveRight}>
          Right
        </button>
        <button type="button" className="button button--arrow item-c" onClick={moveDown}>
          Down
        </button>
      </div>
    </footer>
  );
};

export default Footer;
