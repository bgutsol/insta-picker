import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({onChange, value}) => {
  return (
    <form className='search-form' onSubmit={onChange}>
      <Input className='search-form__input' onChange={onChange} value={value}/>
      <button className='search-form__btn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  );
};


export default SearchForm;
