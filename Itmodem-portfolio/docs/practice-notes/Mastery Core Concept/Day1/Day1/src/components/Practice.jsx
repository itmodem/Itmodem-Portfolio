import React from 'react'

const Welcome = (props) => {
  return (
    <h2>Welcome {props.name}</h2>
  )
};

Welcome.defaultProps = {
    name:"Guest",
};

export default Welcome;
