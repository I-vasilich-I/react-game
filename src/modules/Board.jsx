import React from 'react';

const Board = () => (
  <main className="main">
    <section className="board">
      {[...Array(16).keys()].map((elem, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={id} className="tile">
          0
        </div>
      ))}
    </section>
  </main>
);

export default Board;
