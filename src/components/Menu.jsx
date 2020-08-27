import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

function Menu({ items }) {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {
          items.sort().map(m =>
            <li key={ m } >
              <Link to={ `/${m}` }>{ m }</Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Menu;
