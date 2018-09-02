import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './SearchForm.scss';

const SearchForm = ({onChange, onSubmit, value}) => {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      <input className='search-form__input' type='text' onChange={onChange} value={value} placeholder='hashtag'/>
      <button className='search-form__btn'>
        <FontAwesomeIcon icon={faSearch} size='2x'/>
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};


export default SearchForm;
