import React from 'react';
import { useState } from 'react';


const Board = () => {
  const  [tileStyle, setTileStyle] = useState(["tile"]);

  const tilesArray = [...Array(16).keys()].map((elem, id) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={id} className={[...tileStyle]}>
      0
    </div>
  ))

  const addClass = (newClass) => {
    setTileStyle([...tileStyle, newClass]);
  }

  const deleteClass = (classToDelete) => {
    setTileStyle([tileStyle.filter((elem) => elem !== classToDelete)]);
  }

  console.log(tilesArray);

  return (
    <main className="main">
      <section className="board">
          {[...tilesArray]}
      </section>
    </main>
  )

}


export default Board;
