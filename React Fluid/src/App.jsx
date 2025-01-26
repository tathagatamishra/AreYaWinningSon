import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FluidSimulation from './FluidSimulation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FluidSimulation />
    </div>
  )
}

export default App
