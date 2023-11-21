import './App.css'
import React from 'react'
import Home from './Components/Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from './Components/Pages/Login/Login'
import Registration from './Components/Pages/Registration/Registration';

function App() {
 

  return (
    <>
      <div className='app'>
     

        {/* <Home/> */}
        <Login/>
        {/* <Registration/> */}
        
       </div>
       </>
  )
}

export default App;
