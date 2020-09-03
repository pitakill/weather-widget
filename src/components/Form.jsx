import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    margin: '1em auto 0',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Form({ onSubmit }) {
  const [value, setValue] = React.useState('');
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={ e => handleSubmit(e) }>
      <InputBase
        className={classes.input}
        placeholder="City"
        value={ value } 
        onChange={ e => setValue(e.target.value)
      } />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

Form.propTypes = {
  onSubmit: func.isRequired,
}

export default Form;
