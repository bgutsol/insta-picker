import React from 'react';

const Card = ({ thumbnail }) => {

  return (
    <article className='card'>
      <div className="card__image">
        <img className='card__img-i' src={thumbnail} alt=''/>
      </div>
    </article>
  );
};


export default Card;
