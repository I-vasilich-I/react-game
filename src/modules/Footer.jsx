import React from 'react';

const Footer = (props) => {
  const { board, setBoard } = props;

  const moveLeft = () => {
    setBoard([...Array(16).keys()].map((elem) => elem = 2));
  }
  const moveUp = () => {
    setBoard([...Array(16).keys()].map((elem) => elem = 4));
  }
  const moveRight = () => {
    setBoard([...Array(16).keys()].map((elem) => elem = 6));
  }
  const moveDown = () => {
    setBoard([...Array(16).keys()].map((elem) => elem = 8));
  }

  return (
    <footer className="footer">
      <div className="footer__info">HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</div>
      <div className="button__container">
        <button className="button button--arrow item-b" onClick={moveLeft}>
          Left
        </button>
        <button className="button button--arrow item-a" onClick={moveUp}>
          Up
        </button>
        <button className="button button--arrow item-d" onClick={moveRight}>
          Right
        </button>
        <button className="button button--arrow item-c" onClick={moveDown}>
          Down
        </button>
      </div>
    </footer>
  )
}

export default Footer;
