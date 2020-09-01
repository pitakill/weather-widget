import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import Context from './Context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

function Filter(props) {
  const classes = useStyles();

  return (
    <Context.Consumer>
      {
        context =>
          <Grid className={classes.root} container spacing={3}>
            <Cards 
              forecasts={
                context.forecasts.filter(
                  f => f.name.charAt(0) === props.match.url.charAt(1)
                )
              } 
            />
          </Grid>
      }
    </Context.Consumer>
  )
}

export default Filter;
