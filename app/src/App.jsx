import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './inputs/Input'
import Header from './Header/Header'
import Three from './Three/Three'
import SceneComponent from './Three/Three'
import ThreeScene from './Main/main'
import BrainBuddyScene from './Main/main'
import {  Routes, Route } from "react-router-dom";
import About from './about/About'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Header/>
     {/* <SceneComponent/> */}
      <Routes>

        <Route path='/' element={<><BrainBuddyScene/><Input/></>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/exp' element={<SceneComponent/>} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
