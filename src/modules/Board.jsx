/* eslint-disable react/prop-types */
import React from 'react';

const Board = (props) => {
  const { history, boardSize } = props;
  const current = history[history.length - 1];
  const { board } = current;
  const tileStyle = {
    4: 'tile',
    3: 'tile tile--3',
    5: 'tile tile--5',
  };
  const boardStyle = `board${boardSize !== 4 ? ` board-${boardSize}` : ''}`;
  const setValue = (elem) => {
    if (!elem) return '';
    return elem;
  };

  return (
    <main className="main">
      <section className={boardStyle}>
        {board.map((elem, id) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={id}
            className={`${tileStyle[boardSize]} tile--${setValue(elem) ? setValue(elem) : 0}`}
          >
            {setValue(elem)}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Board;
