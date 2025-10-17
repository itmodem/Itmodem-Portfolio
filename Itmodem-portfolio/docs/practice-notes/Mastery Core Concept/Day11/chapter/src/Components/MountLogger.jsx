import React from 'react'
import { useEffect } from 'react'
const MountLogger = () => {
    useEffect(() =>{
        console.log("Components mounted!")
    },[]);
  return (
    <div>
      <h1>Hello From MountLogger.</h1>
    </div>
  )
}

export default MountLogger
