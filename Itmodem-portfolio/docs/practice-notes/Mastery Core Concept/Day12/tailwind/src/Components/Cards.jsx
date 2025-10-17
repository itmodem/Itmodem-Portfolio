import React from 'react';

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <div className='bg-white p-6 shadow rounded'>Card 1</div>
      <div className='bg-white p-6 shadow rounded'>Card 2</div>
      <div className='bg-white p-6 shadow rounded'>Card 3</div>
    </div>
  );
};

export default Cards;
