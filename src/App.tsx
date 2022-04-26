import React, { useState } from 'react'
import { Wrapper_main } from './styled'
import { Profile } from './components/profile';
import { Header } from './components/header';

function App() {

  return (
    <Wrapper_main>
      <Header />
      <Profile />
    </Wrapper_main>
  )
}

export default App
