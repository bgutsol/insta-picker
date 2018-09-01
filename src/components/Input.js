import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Input = ({onChange, value}) => {
  return (
    <input type="text"
           className='search__input'
           placeholder='input search tag'
           value={value}
           onChange={onChange}
    />
  );
};


export default Input;
