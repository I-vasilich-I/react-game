import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import PopUp from './PopUp';
import { TransitionAlertsWin, TransitionAlertsLose } from './Alert';
import { getInitialBoardArray, getValueFromLocalStorage } from './utils/helpers';

const App = () => {
  const [boardSize, setBoardSize] = useState(4);
  const [bestScore, setBestScore] = useState(getValueFromLocalStorage('bestScore') || [0]);
  const localHistory = getValueFromLocalStorage('2048-history');
  const prepareHistoryState = () => {
    const isLocalBoardSizeSame =
      localHistory && localHistory[localHistory.length - 1].board.length === boardSize * boardSize;
    return localHistory && isLocalBoardSizeSame
      ? localHistory
      : [
          {
            board: getInitialBoardArray(boardSize * boardSize),
            score: 0,
            win: false,
            gameOver: false,
          },
        ];
  };

  const [history, setHistory] = useState(prepareHistoryState());
  const [isPopUpActive, setIsPopUpActive] = useState(false);
  const [openWin, setOpenWin] = useState(false);
  const [openLose, setOpenLose] = useState(false);
  const [winningNumber, setWinningNumber] = useState('2048');
  const [stepBackButton, setStepBackButton] = useState('0');

  return (
    <div className="App">
      <h1 className="hidden">2048</h1>
      <TransitionAlertsWin openWin={openWin} setOpenWin={setOpenWin} />
      <TransitionAlertsLose openLose={openLose} setOpenLose={setOpenLose} />
      <PopUp
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        setHistory={setHistory}
        bestScore={bestScore}
        isPopUpActive={isPopUpActive}
        setIsPopUpActive={setIsPopUpActive}
        winningNumber={winningNumber}
        setWinningNumber={setWinningNumber}
        stepBackButton={stepBackButton}
        setStepBackButton={setStepBackButton}
      />
      <Header
        bestScore={bestScore}
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        history={history}
        setHistory={setHistory}
        isPopUpActive={isPopUpActive}
        setIsPopUpActive={setIsPopUpActive}
        stepBackButton={stepBackButton}
      />
      <Board history={history} boardSize={boardSize} />
      <Footer
        bestScore={bestScore}
        setBestScore={setBestScore}
        boardSize={boardSize}
        history={history}
        setHistory={setHistory}
        setOpenWin={setOpenWin}
        setOpenLose={setOpenLose}
        winningNumber={winningNumber}
      />
    </div>
  );
};

export default App;
