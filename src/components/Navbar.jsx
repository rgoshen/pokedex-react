/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ alt, logo, navItems }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className='navbar'>
      <a href='/' className='brand-name'>
        <img src={logo} alt={alt} className='logo' />
      </a>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={`${item.path}`}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
