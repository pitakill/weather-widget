import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Filter from './Filter';
import Main from './Main';
import Menu from './Menu';
import Offline from './Offline';

function Router({ menu }) {
  const [isOnline, setIsOnline] = React.useState(false);
  const [route, setRoute] = React.useState(0);
  
  React.useEffect(() => {
    fetch("https://google.com", { mode: 'no-cors' })
      .then(() => setIsOnline(true))
      .catch(() => setIsOnline(false))
  });

  const changeRoute = (e, newRoute) => setRoute(newRoute);

  return (
    <BrowserRouter>
      {
        isOnline
        ? 
          <>
            <Menu items={ menu } route={ route } changeRoute={ changeRoute } />
            <Main>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Home" />
                </Route>
                <Route exact path="/Home" component={ Home } />
                {
                  menu.map(m =>
                    <Route 
                      key={m}
                      path={`/${m.toLowerCase()}`} 
                      component={ Filter }
                    />
                  )
                }
              </Switch>
            </Main>
          </>
        : <Offline />
      }
  </BrowserRouter>
  )
}

export default Router;
