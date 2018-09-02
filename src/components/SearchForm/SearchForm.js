import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Input from 'Components/Input';

const SearchForm = ({onChange, onSubmit, value}) => {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      <Input className='search-form__input' onChange={onChange} value={value}/>
      <button className='search-form__btn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  );
};


export default SearchForm;
