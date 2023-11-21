import './App.css'
import React from 'react'
import Home from './Components/Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from './Components/Pages/Login/Login'

function App() {
 

  return (
    <>
      <div className='app'>
     

        {/* <Home/> */}
        <Login/>
        
       </div>
       </>
  )
}

export default App;
