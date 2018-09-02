import React from 'react';
import PropTypes from 'prop-types';
import Card from 'Components/Card';
import './UserCards.scss';

const UserCards = ({cards}) => {
  return (
    <ul className='user-cards'>
      {cards.map((card, index) => (
        <li key={index} className="user-cards__item">
          <Card card={card}/>
        </li>
      ))}
    </ul>
  );
};

UserCards.propTypes = {
  cards: PropTypes.array.isRequired
};


export default UserCards;
