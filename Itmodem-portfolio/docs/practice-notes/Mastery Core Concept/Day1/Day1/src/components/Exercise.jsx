import React from 'react'

const Wrapper = (props) => {
  return (
    <div className='Box'>
        {props.children}
    </div>
  )
}

export default Wrapper;
