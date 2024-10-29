import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div className='menu' onClick={toggleMenu} style={{ padding: '10px', cursor: 'pointer' }}>
        menu
      </div>
      {isOpen && (
        <ul style={{ position: 'absolute', backgroundColor: '#f9f9f9', border: '1px solid #ccc', listStyle: 'none', padding: '10px', margin: 0 }}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">live now</a></li>
          <li><a href="/contact">upcomming</a></li>
          <li><a href="/">popular</a></li>
          <h1>TOURNAMENTS</h1>
          <li><a href="/about">primier league</a></li>
          <li><a href="/contact">seria a</a></li>
          <li><a href="/">laliga</a></li>
          <li><a href="/about">bundesliga</a></li>
          <li><a href="/contact">ligue 1</a></li>
          <h1>POPULAR COUNTRIES</h1>
          <li><a href="/">france</a></li>
          <li><a href="/about">england</a></li>
          <li><a href="/contact">germany</a></li>
          <li><a href="/">italy</a></li>
          <li><a href="/about">rwanda</a></li>
          <li><a href="/contact">spain</a></li>
          <li><a href="/contact">international</a></li>
        </ul>
      )}
    </div>
  );
};

export default MenuButton;