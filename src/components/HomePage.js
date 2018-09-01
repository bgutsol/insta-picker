import React from 'react';
import { Link } from 'react-router-dom';
import InstagramLogin from './containers/InstagramLogin';
import SearchContainer from './containers/SearchContainer';

const HomePage = () => {
  return (
    <div>
      <h1>Tag Picker</h1>
      <InstagramLogin></InstagramLogin>
      <SearchContainer></SearchContainer>
    </div>
  );
};

export default HomePage;
