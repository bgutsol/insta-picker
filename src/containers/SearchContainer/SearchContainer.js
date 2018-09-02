import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'Actions/cards';
import SearchForm from 'Components/SearchForm';
import UsersList from 'Components/UsersList';
import './SearchContainer.scss';

export class SearchContainer extends React.Component {
  handleInputChange = e => {
    const {actions} = this.props;

    actions.setSearchTag(e.target.value);
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.fetchCards();
  };

  fetchCards = () => {
    const {accessToken, searchTag, actions} = this.props;

    if (searchTag && searchTag.length > 0) {
      actions.fetchCardsList(accessToken, searchTag);
    }
  };

  render() {
    const {cards, isLoading, isLoaded, searchTag} = this.props;
    const isCardsEmpty = Object.keys(cards).length === 0;

    return (
      <div className="search-container">
        <SearchForm
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          value={searchTag}
        />
        {isLoading && <p className="search-container__notification">
          Please wait
        </p>}
        {isLoaded && isCardsEmpty && <p className="search-container__notification">
          Nothing found, please try different tag
        </p>}
        {isLoaded && !isCardsEmpty && <UsersList usersCards={cards}/>}
      </div>
    );
  }
}

SearchContainer.propTypes = {
  accessToken: PropTypes.string.isRequired,
  cards: PropTypes.object.isRequired,
  searchTag: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    searchTag: state.cards.searchTag,
    cards: state.cards.cards,
    isLoading: state.cards.isLoading,
    isLoaded: state.cards.isLoaded,
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
