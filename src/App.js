import React from 'react';
import Navbar from './components/Navbar';
import PokeBoard from './components/PokemonBoard';
import './assets/css/styles.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar logo='Pokemon' navItems={[{ path: '/about', label: 'About' }]} />
      <PokeBoard />
    </div>
  );
}

export default App;
