import React from 'react';
import Card from './Card';
import './Board.css';
import data from '../data/pokedex.json';

export default function PokeBoard() {
  return (
    <div className='poke-board'>
      <h1 className='title'>Pokemon Pokedex</h1>
      <div className='poke-grid'>
        {data.map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
}
