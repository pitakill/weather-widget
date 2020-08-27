import React from 'react';
import Cards from './Cards';
import Context from './Context';

function Filter(props) {
  return (
    <Context.Consumer>
      {
        context =>
          <>
            <Cards 
              forecasts={
                context.forecasts.filter(
                  f => f.name.charAt(0) === props.match.url.charAt(1)
                )
              } 
            />
          </>
      }
    </Context.Consumer>
  )
}

export default Filter;
