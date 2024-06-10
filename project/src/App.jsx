import { useState } from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './pages/home';
import Detail from './pages/detail';
import './App.css'

function App() {


  return (
    <>
     

    <BrowserRouter>
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/'element={<Detail/>}/>
    </Routes>
    
    
    </BrowserRouter>
     
      
    </>
  )
}

export default App
