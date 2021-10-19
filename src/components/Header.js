import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export function Header() {
  return (
    <header className='App'>
      <h1>
        <Link to="/">WEB2 (HeaderComponent)</Link>
      </h1>
    </header>
  );
}
