import React from 'react'
import PropTypes from 'prop-types';
const Usercard = ({name, age, isAdmin}) => {
  return (
    <div style={{border: '2px solid green', padding: '10px', margin: '10px'}}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  )
}

Usercard.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isAdmin: PropTypes.bool
};

Usercard.defaultProps = {
    age: 18,
    isAdmin: false
};
export default Usercard;
