import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome, {props.name}</h1>
    </div>
  )
}
Welcome.defaultProps = {
  name:"Guest",
}
export default Welcome;
