import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Filter from './Filter';
import Main from './Main';
import Menu from './Menu';

function Router({ menu }) {
  return (
    <BrowserRouter>
      <Menu items={ menu } />
      <Main>
        <Route exact path="/" component={ Home } />
        {
          menu.map(m =>
            <Route 
              key={m}
              path={`/${m.toLowerCase()}`} 
              component={ Filter }
            />
          )
        }
    </Main>
  </BrowserRouter>
  )
}

export default Router;
