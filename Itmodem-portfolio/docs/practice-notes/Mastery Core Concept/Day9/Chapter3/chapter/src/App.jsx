import React from 'react'
import Welcome from './components/Welcome'
import UserInfo from './components/UserInfo'
import Greeting from './components/Greeting'
import Wrapper from './components/Wrapper'
const App = () => {
  return (
    <div>
      <Welcome name="Mr.Rupesh Lal"/>
      <UserInfo name="Rupesh Lal" age="25" />
      <Greeting name="Itmodem" />
    <Wrapper />
    </div>
  )
}

export default App
