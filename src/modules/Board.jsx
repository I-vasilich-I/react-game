/* eslint-disable react/prop-types */
import React from 'react';

const Board = (props) => {
  const { board } = props;
  const setValue = (elem) => {
    if (!elem) return '';
    return elem;
  };

  return (
    <main className="main">
      <section className="board">
        {board.map((elem, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={id} className={`tile tile--${setValue(elem) ? setValue(elem) : 0}`}>
            {setValue(elem)}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Board;
