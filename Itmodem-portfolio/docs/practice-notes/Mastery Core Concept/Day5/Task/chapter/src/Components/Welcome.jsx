import React from 'react'

const Welcome = ({name = "Guest"}) => {
    
  return (
   <h2>Welcome, {name}</h2>
  )
}

export default Welcome;
