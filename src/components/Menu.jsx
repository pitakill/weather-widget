import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
