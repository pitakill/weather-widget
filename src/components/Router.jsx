import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Filter from './Filter';
import Main from './Main';
import Menu from './Menu';
import Offline from './Offline';

function Router({ menu }) {
  const [isOnline, setIsOnline] = React.useState(false);
  
  React.useEffect(() => {
    fetch("https://google.com", { mode: 'no-cors' })
      .then(() => setIsOnline(true))
      .catch(() => setIsOnline(false))
  });

  return (
    <BrowserRouter>
      {
        isOnline
        ? 
          <>
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
          </>
        : <Offline />
      }
  </BrowserRouter>
  )
}

export default Router;
