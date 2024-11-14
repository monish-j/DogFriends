import React from 'react';
import Card from './Card';

const CardList = ({ dogs }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {dogs.map((dog, i) => {
        const breed = dog.split('/')[4];
        return (
          <Card
            key={i}
            breed={breed}
            image={dog}
          />
        );
      })}
    </div>
  );
}

export default CardList;
