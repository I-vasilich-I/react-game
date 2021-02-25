/* eslint-disable react/prop-types */
import React from 'react';
import { getNewBoardArray, areArraysEqual, setBestScoreInStorage } from './utils/helpers';

const Footer = (props) => {
  const { board, setBoard, score, setScore, bestScore, setBestScore } = props;
  let newScore = 0;
  
  const setNewBoard = (newBoard) => {
    if (!areArraysEqual(newBoard, board)) {
      const tempBoard = getNewBoardArray(newBoard);
      setBoard(tempBoard !== -1 ? tempBoard : newBoard);
    }
    const newBestScore = score + newScore > bestScore ? score + newScore : bestScore;
    setBestScore(newBestScore);
    setBestScoreInStorage(newBestScore);
    setScore(score + newScore);
  }

  const processLine = (line, direction = false) => {

    const trimLine = line.filter((elem) => !!elem);

    for (let j = 0; j < trimLine.length; j++) {
      if (trimLine[j] === trimLine[j + 1]) {
        newScore += trimLine[j] + trimLine[j + 1];
        [trimLine[j], trimLine[j + 1]] = [trimLine[j] + trimLine[j + 1], 0];
      }
    }

    const newLine = trimLine.filter((elem) => !!elem);
    if (direction) newLine.reverse();

    while (newLine.length < line.length) {
      newLine.push(0);
    }
    return direction ? newLine.reverse() : newLine;
  }

  const getRow = (board, i) => {
    return board.filter((elem, id) => id >= i && id < i + 4);
  }

  const getColumn = (board, i) => {
    return board.filter((elem, id) => (id - i) % 4 === 0);
  }

  const updateNewBoardHorizontal = (newBoard, i, direction = false) => {
    const newLine = processLine(getRow(board, i), direction);
    newLine.map((elem, id) => {
      newBoard[id + i] = elem;
      return elem;
    });
  }

  const updateNewBoardVertical = (newBoard, i, direction = false) => {
    const newLine = processLine(getColumn(board, i), direction);
    newLine.map((elem, id) => {
      newBoard[id * 4 + i] = elem;
      return elem;
    });
  }

  const moveLeft = () => {
    const newBoard = new Array(16);
    for (let i = 0; i < 16; i+=4) {
      updateNewBoardHorizontal(newBoard, i);
    }
    setNewBoard(newBoard);
  };

  const moveRight = () => {
    const newBoard = new Array(16);
    for (let i = 0; i < 16; i+=4) {
      updateNewBoardHorizontal(newBoard, i, true);
    }
    setNewBoard(newBoard);
  };

  const moveUp = () => {
    const newBoard = new Array(16);
    for (let i = 0; i < 4; i++) {
      updateNewBoardVertical(newBoard, i);
    }
    setNewBoard(newBoard);
  };

  const moveDown = () => {
    const newBoard = new Array(16);
    for (let i = 0; i < 4; i++) {
      updateNewBoardVertical(newBoard, i, true);
    }
    setNewBoard(newBoard);
  };

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
