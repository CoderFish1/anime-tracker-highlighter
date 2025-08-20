import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import AnimeCard from './components/animeCard'
import Fav from './components/fav'
import Quotes from './components/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
     <Header/>
     <AnimeCard/>
     <Fav/>
     <Quotes/>
    </div>
    
    </>
  )
}

export default App
