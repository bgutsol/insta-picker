import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/cards';
import SearchForm from '../SearchForm';
import SearchList from '../SearchList';

export class SearchContainer extends React.Component {
  state = {
    searchTag: '',
  };

  handleFormChange = e => {

    console.log(e.target.name, e.target.value);

    this.setState({searchTag: e.target.value}, this.fetchCards);
  };

  fetchCards = () => {
    const { accessToken, actions } = this.props;
    const { searchTag } = this.state;

    if (searchTag && searchTag.length > 0) {
      actions.fetchCardsList(accessToken, searchTag);
    }
  };

  render() {
    const {cards, isLoading, hasError } = this.props;

    console.log(this.props);

    return (
      <div className="search-container">
        <SearchForm
          onChange={this.handleFormChange}
          value={this.state.searchTag}
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
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
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
