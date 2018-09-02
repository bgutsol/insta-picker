import React from 'react';
import PropTypes from 'prop-types';
import UserCards from 'Components/UserCards';
import './UsersList.scss';

const UsersList = ({usersCards}) => {
  return (
    <div className='users-list'>
      {Object.keys(usersCards).map(user => (
        <div key={user} className='users-list__item'>
          <h2 className="users-list__item-title">
            By {user}
          </h2>
          <UserCards className="users-list__item-cards" cards={usersCards[user]}/>
        </div>
      ))}
    </div>
  );
};

UsersList.propTypes = {
  usersCards: PropTypes.object.isRequired
};

export default UsersList;
