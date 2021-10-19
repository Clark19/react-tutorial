import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export function Nav({ data }) {
  const dataList = data.map(item => <li key={item.id}>
    <Link to={'/read/' + item.id}>{item.title}</Link>
  </li>
  );

  return (
    <nav className='App'>
      (Nav Component)
      <ol>{dataList}</ol>
    </nav>
  );
}
