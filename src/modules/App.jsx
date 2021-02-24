import React from 'react';
import Board from './Board';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1 className="hidden">2048</h1>
    <Header />
    <Board />
    <Footer />
  </div>
);

export default App;
