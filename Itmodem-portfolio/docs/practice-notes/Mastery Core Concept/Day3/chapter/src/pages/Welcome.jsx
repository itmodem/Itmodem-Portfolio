import React from 'react'
function greet(name) {
  alert(`Hello, ${name}`);
}
const Welcome = () => {
  return (
    <div>
      <button onClick={() => greet('Rupesh')} className='bg-amber-500 text-center color-black m-1 px-1 py-1 rounded'>Text</button>
    </div>
  )
}

export default Welcome
