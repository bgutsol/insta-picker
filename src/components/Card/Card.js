import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({card}) => {
  const {link, image: {lowResolution, standardResolution}} = card;

  return (
    <a href={link} className='card' target='_blank' rel='noopener noreferrer'>
      <span className="card__image">
        <img src={lowResolution.url} srcSet={`${standardResolution.url} 2x`}/>
      </span>
    </a>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
