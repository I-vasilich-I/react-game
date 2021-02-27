/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { getNewBoardArray, areArraysEqual, setBestScoreInStorage } from './utils/helpers';

const Footer = (props) => {
  const { board, setBoard, score, setScore, bestScore, setBestScore, boardSize } = props;
  let newScore = 0;
  const squareBoardSize = boardSize * boardSize;

  const isWin = (array) => {
    const tempArr = [...array].sort((a, b) => a - b);
    return tempArr[tempArr.length - 1] >= 32;
  };

  const handleGameOver = (array) => {
    if (isWin(array)) console.log('you won!');
    console.log('game over');
  };

  const setNewBoard = (newBoard) => {
    if (!areArraysEqual(newBoard, board)) {
      const tempBoard = getNewBoardArray(newBoard);
      const resultBoard = tempBoard !== -1 ? tempBoard : newBoard;
      setBoard(resultBoard);
      if (isWin(resultBoard)) console.log('you won! You may continue playing');
      // eslint-disable-next-line no-use-before-define
      if (isGameOver(resultBoard)) handleGameOver(resultBoard);
    }
    // eslint-disable-next-line no-use-before-define
    if (isGameOver(board)) handleGameOver([...board]);
    const newBestScore = score + newScore > bestScore ? score + newScore : bestScore;
    setBestScore(newBestScore);
    setBestScoreInStorage(newBestScore);
    setScore(score + newScore);
  };

  const processLine = (line, direction = false) => {
    const trimLine = line.filter((elem) => !!elem);
    if (direction) trimLine.reverse();
    for (let j = 0; j < trimLine.length; j++) {
      if (trimLine[j] === trimLine[j + 1]) {
        newScore += trimLine[j] + trimLine[j + 1];
        [trimLine[j], trimLine[j + 1]] = [trimLine[j] + trimLine[j + 1], 0];
      }
    }

    const newLine = trimLine.filter((elem) => !!elem);
    // if (direction) newLine.reverse();

    while (newLine.length < line.length) {
      newLine.push(0);
    }
    return direction ? newLine.reverse() : newLine;
  };

  const getRow = (array, i) => array.filter((elem, id) => id >= i && id < i + boardSize);

  const getColumn = (array, i) => array.filter((elem, id) => (id - i) % boardSize === 0);

  const updateNewBoardHorizontal = (newBoard, i, direction = false) => {
    const newLine = processLine(getRow(board, i), direction);
    newLine.map((elem, id) => {
      // eslint-disable-next-line no-param-reassign
      newBoard[id + i] = elem;
      return elem;
    });
  };

  const updateNewBoardVertical = (newBoard, i, direction = false) => {
    const newLine = processLine(getColumn(board, i), direction);
    newLine.map((elem, id) => {
      // eslint-disable-next-line no-param-reassign
      newBoard[id * boardSize + i] = elem;
      return elem;
    });
  };

  const moveLeft = () => {
    const newBoard = new Array(squareBoardSize);
    for (let i = 0; i < squareBoardSize; i += boardSize) {
      updateNewBoardHorizontal(newBoard, i);
    }
    setNewBoard(newBoard);
  };

  const moveRight = () => {
    const newBoard = new Array(squareBoardSize);
    for (let i = 0; i < squareBoardSize; i += boardSize) {
      updateNewBoardHorizontal(newBoard, i, true);
    }
    setNewBoard(newBoard);
  };

  const moveUp = () => {
    const newBoard = new Array(squareBoardSize);
    for (let i = 0; i < boardSize; i++) {
      updateNewBoardVertical(newBoard, i);
    }
    setNewBoard(newBoard);
  };

  const moveDown = () => {
    const newBoard = new Array(squareBoardSize);
    for (let i = 0; i < boardSize; i++) {
      updateNewBoardVertical(newBoard, i, true);
    }
    setNewBoard(newBoard);
  };

  const isGameOver = (array) => {
    const emptySpots = array.filter((elem) => !elem).length;
    if (emptySpots) return false;
    for (let i = 0; i < squareBoardSize; i += boardSize) {
      const line = getRow(array, i);
      for (let j = 0; j < line.length - 1; j++) {
        if (line[j] === line[j + 1]) {
          return false;
        }
      }
    }

    for (let i = 0; i < boardSize; i++) {
      const line = getColumn(array, i);
      for (let j = 0; j < line.length - 1; j++) {
        if (line[j] === line[j + 1]) {
          return false;
        }
      }
    }

    return true;
  };

  const handleEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') moveLeft();
    if (e.code === 'ArrowRight' || e.code === 'KeyD') moveRight();
    if (e.code === 'ArrowUp' || e.code === 'KeyW') moveUp();
    if (e.code === 'ArrowDown' || e.code === 'KeyS') moveDown();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEvent);
    return () => {
      document.removeEventListener('keydown', handleEvent);
    };
  }, ['keydown', handleEvent]);

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
