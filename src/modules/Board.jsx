import React from 'react';
//import { useState } from 'react';


const Board = () => {
  //const  [tileStyle, setTileStyle] = useState(["tile"]);

  const setValue = (id) => {
    if (!id) return '';
    if (id <= 11) return Math.pow(2, id);
    return Math.pow(2, 11);
  }

  const tilesArray = [...Array(16).keys()].map((elem, id) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={id} className={`tile tile--${setValue(id) ? setValue(id) : 0}`}>
      {setValue(id)}
    </div>
  ))

  return (
    <main className="main">
      <section className="board">
          {[...tilesArray]}
      </section>
    </main>
  )

}


export default Board;
