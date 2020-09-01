import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import Context from './Context';
import Form from './Form';

function Home() {
  return (
    <Grid container spacing={3}>
      <Context.Consumer>
        {
          context =>
            <>
              <Grid item xs={12}>
                <Form onSubmit={ context.requestCity } />
              </Grid>
              <Cards forecasts={ context.forecasts } />
            </>
        }
      </Context.Consumer>
    </Grid>
  )
}

export default Home;
