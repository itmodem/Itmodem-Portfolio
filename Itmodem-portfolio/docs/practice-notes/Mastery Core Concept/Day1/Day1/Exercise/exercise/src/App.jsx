import React from 'react'
import Usercards from './pages/Usercards';
import Wrapper from './pages/Wrapper';
import Welcome from './pages/Welcome';
const App = () => {
  return (
    <div>
      <Usercards name="John" age={22} />
      <Wrapper>
        <p>This is wrapper content</p>
      </Wrapper>
      <Welcome  name="John"/>
    </div>
  )
}

export default App;
