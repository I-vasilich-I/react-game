import React from 'react';

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer__info">Some information</div>
      <div className="button__container">
        <button className="button button--arrow item-b">
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
