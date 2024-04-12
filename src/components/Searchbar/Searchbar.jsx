import React, { Component } from 'react';

// search start after submit and I don't collapse items if user already
// find something and after that, delete search query from input field
// and submit without query (I think it's better for ux)
class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSetSearchValue } = this.props;

    handleSetSearchValue(e.currentTarget.search.value);
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChangeInput} value={search} type="text" name="search" />
        <button>search</button>
      </form>
    );
  }
}

export default Searchbar;
