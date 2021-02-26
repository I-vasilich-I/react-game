/* eslint-disable react/prop-types */
import React from 'react';

const Board = (props) => {
  const { board, boardSize } = props;
  const tileStyle = {
    4: 'tile',
    3: 'tile tile--3',
    5: 'tile tile--5',
  }
  const setValue = (elem) => {
    if (!elem) return '';
    return elem;
  };

  return (
    <main className="main">
      <section className={`board${boardSize !== 4 ? ' board-'+boardSize : ''}`}>
        {board.map((elem, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={id} className={`${tileStyle[boardSize]} tile--${setValue(elem) ? setValue(elem) : 0}`}>
            {setValue(elem)}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Board;
