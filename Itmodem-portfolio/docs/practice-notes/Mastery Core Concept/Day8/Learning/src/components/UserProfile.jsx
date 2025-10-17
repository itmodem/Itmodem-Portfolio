import React from 'react'
const isLoggedIn = false;
const UserProfile = () => {

  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back, Rupesh</h2> : <h2>Please Login to continue </h2>}
    </div>
  )
}

export default UserProfile
