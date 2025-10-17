import React from 'react'

const Wrapper = (props) => {
  return (
    <div className='box'>
      {props.children}
    </div>
  )
}

export default Wrapper;
