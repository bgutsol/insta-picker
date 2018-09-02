import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h2 className='not-found-page__title'>
        404 Page Not Found
      </h2>
      <Link to="/" className='not-found-page__link'>Go back to homepage</Link>
    </div>
  );
};

export default NotFoundPage;
