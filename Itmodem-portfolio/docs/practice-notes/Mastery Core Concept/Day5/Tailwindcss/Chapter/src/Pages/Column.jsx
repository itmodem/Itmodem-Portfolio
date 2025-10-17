import React from 'react'

const Column = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-4 gap-4'>
      <div className='bg-blue-400 p-4'>Column 1</div>
      <div className='bg-green-400 p-4'>Column 2</div>
      <div className='bg-red-400 p-4'>Column 3</div>
      <div className='bg-yellow-400 p-4'>Column 4</div>
      <div className='bg-red-400 p-4'>Column 5</div>
      <div className='bg-yellow-100 p-4'>Column 6</div>
    </div>
  )
}

export default Column
