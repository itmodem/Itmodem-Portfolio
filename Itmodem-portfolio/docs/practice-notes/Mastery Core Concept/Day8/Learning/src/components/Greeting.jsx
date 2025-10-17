import React from 'react'

const Greeting = () => {
   const hour = new Date().getHours();
   let message;
   if (hour < 12) {
    message = 'Good Morning';
   } else if (hour < 18) {
    message = 'Good Afternoon';
   } else {
    message = 'Good Evening'
   }
  return (
    <h2>{message}</h2>
  )
}

export default Greeting
