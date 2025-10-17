import React from 'react'

const Welcome = () => {
    const isAdmin = true;
  return (
    <div>
      <h2>Welcome </h2>
      {isAdmin && <button>Delete User</button>}
    </div>
  )
}

export default Welcome
