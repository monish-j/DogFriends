import React from 'react';

const Card = ({ breed, image }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
      <img alt='dog' src={image} className='dog-image' />
      <div>
        <h2>{breed}</h2>
      </div>
    </div>
  );
}

export default Card;
