import {Routes,Route} from "react-router-dom"
import { useState } from 'react'
import Header from "./componets/header";
import Home from "./Pages/home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
