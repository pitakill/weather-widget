import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';

function Menu({ changeRoute, items, route }) {
  const menu = [ 'Home', ...items.sort() ];

  return (
    <AppBar position="static">
      <Tabs value={route} onChange={changeRoute}>
        {
          menu.map(m =>
            <Tab 
              component={Link}
              key={ m } 
              label={ m }
              to={`/${m}`}
            />
          )
        }
      </Tabs>
    </AppBar>
  )
}

export default Menu;
