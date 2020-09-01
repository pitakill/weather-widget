import React from 'react';
import Cards from './Cards';
import Context from './Context';
import Form from './Form';

function Home() {
  return (
    <Context.Consumer>
      {
        context =>
          <>
            <Form onSubmit={ context.requestCity } />
            <Cards forecasts={ context.forecasts } />
          </>
      }
    </Context.Consumer>
  )
}

export default Home;
