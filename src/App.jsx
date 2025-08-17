import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="logo m-3.5 border-2 inline-block">LOGO</div>
      <div className="searchbar w-xl h-10 border-1 mx-auto">Search</div>
    </div>
    
    </>
  )
}

export default App
