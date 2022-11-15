import React from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import './assets/css/styles.css';
import './App.css';
import bgImage from './assets/images/pokemon-bg.jpg';
import logo from './assets/images/pokeball.png';

function App() {
  return (
    <div
      className='App bg-wrapper'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar
        logo={logo}
        alt='pokeball'
        navItems={[{ path: '/about', label: 'About' }]}
      />
      <Board />
    </div>
  );
}

export default App;
