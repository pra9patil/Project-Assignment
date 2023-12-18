import { useState } from 'react'
import Bgvideo from './components/Bgvideo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bgvideo />
    </>
  )
}

export default App;
