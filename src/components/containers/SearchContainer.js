import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/cards';
import SearchForm from '../SearchForm';
import SearchList from '../SearchList';

export class SearchContainer extends React.Component {
  handleInputChange = e => {
    const { actions } = this.props;

    actions.setSearchTag(e.target.value);
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.fetchCards();
  };

  fetchCards = () => {
    const { accessToken, searchTag, actions } = this.props;

    if (searchTag && searchTag.length > 0) {
      actions.fetchCardsList(accessToken, searchTag);
    }
  };

  render() {
    const {cards, isLoading, hasError, searchTag } = this.props;

    console.log(this.props);

    return (
      <div className="search-container">
        <SearchForm
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          value={searchTag}
        />
        {hasError && 'has Error'}
        {isLoading && 'Loading...'}
        <SearchList cards={cards}/>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  accessToken: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  searchTag: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    searchTag: state.cards.searchTag,
    cards: state.cards.cards,
    isLoading: state.cards.isLoading,
    hasError: state.cards.hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
