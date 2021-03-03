/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { getNewBoardArray, areArraysEqual, setValueInLocalStorage } from './utils/helpers';

const Footer = (props) => {
  const {
    bestScore,
    setBestScore,
    boardSize,
    history,
    setHistory,
    setOpenWin,
    setOpenLose,
    winningNumber,
  } = props;
  const currentBestScore = bestScore[bestScore.length - 1] ? bestScore[bestScore.length - 1] : 0;
  const current = history[history.length - 1];
  const { board, score, win, gameOver } = current;
  const squareBoardSize = boardSize * boardSize;
  let newScore = 0;
  const [play, setPlay] = useState(false);

  const isWin = (array) => {
    const tempArr = [...array].sort((a, b) => a - b);
    return tempArr[tempArr.length - 1] >= winningNumber;
  };

  const handleGameOver = () => {
    if (!gameOver) {
      setOpenLose(true);
      setPlay(false);
    }

    return true;
  };

  const setNewBoard = (newBoard) => {
    const checkObj = {
      resultBoard: null,
      winCheck: null,
      gameOver: null,
    };

    if (!areArraysEqual(newBoard, board)) {
      const tempBoard = getNewBoardArray(newBoard);
      checkObj.resultBoard = tempBoard !== -1 ? tempBoard : newBoard;
      if (isWin(checkObj.resultBoard) && !win) {
        checkObj.winCheck = true;
        setOpenWin(true);
      }
      // eslint-disable-next-line no-use-before-define
      if (isGameOver(checkObj.resultBoard)) checkObj.gameOver = handleGameOver();
      if (!gameOver) {
        setHistory(
          history.concat({
            board: checkObj.resultBoard || board,
            score: score + newScore,
            win: checkObj.winCheck || win,
            gameOver: checkObj.gameOver || gameOver,
          })
        );

        setValueInLocalStorage(
          '2048-history',
          history.concat({
            board: checkObj.resultBoard || board,
            score: score + newScore,
            win: checkObj.winCheck || win,
            gameOver: checkObj.gameOver || gameOver,
          })
        );
      }
    }
    const newBestScore = score + newScore > currentBestScore ? score + newScore : null;
    if (newBestScore) {
      setBestScore(bestScore.concat(newBestScore));
      setValueInLocalStorage('bestScore', bestScore.concat(newBestScore));
    }
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

  useEffect(() => {
    let count = 1;
    const interval = setInterval(() => {
      if (play && !gameOver) {
        moveUp();
        if (count % 3 === 0) moveRight();
        if (count % 2 === 0) moveLeft();
        // if (count % 2 !==0) moveDown();
        count++;
      }
    }, 700);
    return () => clearInterval(interval);
  }, [play, gameOver, history]);

  const autoPlay = () => (play ? setPlay(false) : setPlay(true));

  return (
    <footer className="footer">
      <div className="footer__info">
        HOW TO PLAY: Use your arrow keys on keyboard or in app to move the tiles (w,a,s,d works
        too). Tiles with the same number merge into one when they touch. Add them up to reach 64 or
        2048(can choose in menu)! You can continue to play after you have reached 64 or 2048. Auto
        play runs until game over(click play button). Also you can stop auto play clicking again
        same button. Step back button does step back))
      </div>
      <div className="footer__bottom">
        <div className="footer__links">
          <a
            href="https://github.com/I-vasilich-I"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github__logo"
              src="assets/images/GitHub-Mark.png"
              alt="Oleg Vaskevich"
            />
          </a>
          <a href="https://rs.school/js/" className="footer__link" target="_blank" rel="noreferrer">
            <img src="assets/images/rs_school_js.svg" alt="The Rolling Scopes" />
          </a>
        </div>
        <h3>2021</h3>
        <button type="button" className="button button--nav">
          <SlowMotionVideoIcon fontSize="inherit" onClick={autoPlay} />
        </button>
        <div className="button__container">
          <button type="button" className="button button--nav item-b" onClick={moveLeft}>
            <ArrowBackIcon fontSize="large" />
          </button>
          <button type="button" className="button button--nav item-a" onClick={moveUp}>
            <ArrowUpwardIcon fontSize="large" />
          </button>
          <button type="button" className="button button--nav item-d" onClick={moveRight}>
            <ArrowForwardIcon fontSize="large" />
          </button>
          <button type="button" className="button button--nav item-c" onClick={moveDown}>
            <ArrowDownwardIcon fontSize="large" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
