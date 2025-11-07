import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './inputs/Input'
import Header from './Header/Header'
import Three from './Three/Three'
import SceneComponent from './Three/Three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Input/>
     {/* <SceneComponent/> */}
    </>
  )
}

export default App
