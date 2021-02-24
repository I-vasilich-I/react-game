import React from 'react';
import { useState } from 'react';


const Board = (props) => {
  const { board } = props;

  const setValue = (id) => {
    if (!id) return '';
    if (id <= 11) return Math.pow(2, id);
    return Math.pow(2, 11);
  }

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
  )

}

export default Board;
