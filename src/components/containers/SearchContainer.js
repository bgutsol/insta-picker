import React from 'react';
import SearchForm from '../SearchForm'
import SearchList from '../SearchList'

export class SearchContainer extends React.Component {
  state = {
    inputValue: '',
  };

  handleFormChange = e => {
    console.log(e.target.name, e.target.value);

    this.setState({inputValue: e.target.value});
  };

  render() {
    return (
      <div className="search-container">
        <SearchForm
          onChange={this.handleFormChange}
          value={this.state.inputValue}
        />
        <SearchList />
      </div>
    );
  }
}

export default SearchContainer;
