import React from 'react'
import PropsTypes from 'proptypes';
const Userinfo = ({name, age, isAdmin}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? "Admin" : "User"}</p>
    </div>
  )
}

Userinfo.propTypes = {
    name: PropsTypes.string.isRequired,
    age: PropsTypes.number,
    isAdmin: PropsTypes.bool,
}
export default Userinfo;
