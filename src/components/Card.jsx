/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

export default function Card({ data }) {
  return (
    <div className='card'>
      <div className='img-container'>
        <div className='img-inner'>
          <div className='inner-skew'>
            <img
              src='https://picsum.photos/400/300'
              alt='test'
              className='header-img'
            />
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h2>{data.name.english}</h2>
        <ul className='attr-list'>
          <li>HP: {data.base.HP}</li>
          <li>Attack: {data.base.Attack}</li>
          <li>Defense: {data.base.Defense}</li>
          <li>Sp. Attack: {data.base['Sp. Attack']}</li>
          <li>Sp. Defense: {data.base['Sp. Defense']}</li>
          <li>Speed: {data.base.Speed}</li>
        </ul>
        <br />
        <p className='types'>
          {data.type.map((el, index) => (
            <span key={index}>{el} </span>
          ))}
        </p>
      </div>
    </div>
  );
}
