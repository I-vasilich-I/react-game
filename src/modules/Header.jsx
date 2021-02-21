import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <div className="logo">2048</div>
      <div className="score__container">
        <div className="score">0</div>
        <div className="score">0</div>
      </div>
    </div>
    <div className="header__bottom">
      <p className="title">Start new game.</p>
      <button type="button" className="button">
        New Game
      </button>
    </div>
  </header>
);

export default Header;
