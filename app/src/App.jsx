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
import CheckImprovement from './inputs/Improvement';
import Admin from './admin/admin'

function App() {

  return (
    <>
       <Header/>
      <Routes>

        <Route path='/' element={
          <>
          <Three/>
          {/* <BrainBuddyScene/> */}
          <CheckImprovement/>
          </>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/exp' element={<SceneComponent/>} />
        <Route path='/input' element={<Input/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
     <Footer/> 
    </>
  )
}

export default App
