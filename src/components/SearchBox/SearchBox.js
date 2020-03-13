import React, { Component } from 'react';

export default class SearchBox extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.state.inputValue}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
