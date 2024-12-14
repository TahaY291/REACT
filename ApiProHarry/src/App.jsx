import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <div className='w-screen h-1 bg-black'></div>
      <Content />
    </div>
  )
}

export default App
