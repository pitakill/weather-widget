import React from 'react';
import { func } from 'prop-types';
import '../css/Form.css';

function Form({ onSubmit }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form className="Form" onSubmit={ e => handleSubmit(e) }>
      <input type="text" value={ value } onChange={ e => setValue(e.target.value) } />
      <input type="submit" value="Get forecast" />
    </form>
  )
}

Form.propTypes = {
  onSubmit: func.isRequired,
}

export default Form;
