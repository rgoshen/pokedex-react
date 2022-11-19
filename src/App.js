import React from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import './App.css';
import logo from './assets/images/pokeball.png';

function App() {
  return (
    <div className='App bg-wrapper'>
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
