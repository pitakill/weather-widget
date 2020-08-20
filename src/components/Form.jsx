import React from 'react';
import { func } from 'prop-types';
import '../css/Form.css';

class Form extends React.Component {
  state = {
    value: '',
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form className="Form" onSubmit={ this.handleSubmit }>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Get forecast" />
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: func.isRequired,
}

export default Form;
