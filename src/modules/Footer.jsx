import React from 'react';

const Footer = (props) => {
  const { board, setBoard } = props;

  const handleClick = () => {
    setBoard([...Array(16).keys()].map((elem) => elem = 2));
  }

  return (
    <footer className="footer">
      <div className="footer__info">HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048!</div>
      <div className="button__container">
        <button className="button button--arrow item-b" onClick={handleClick}>
          Left
        </button>
        <button className="button button--arrow item-a">
          Up
        </button>
        <button className="button button--arrow item-d">
          Right
        </button>
        <button className="button button--arrow item-c">
          Down
        </button>
      </div>
    </footer>
  )
}

export default Footer;
