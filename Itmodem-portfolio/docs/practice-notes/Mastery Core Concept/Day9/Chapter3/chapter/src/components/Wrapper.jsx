import React, { Children } from 'react'

const Wrapper = () => {
  return (
    <div>
      <h1 className='box'>{Children.props}</h1>
    </div>
  )
}

export default Wrapper
