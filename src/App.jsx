import './App.css'
import React from 'react'
import Home from './Components/Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from './Components/Pages/Login/Login'
import Registration from './Components/Pages/Registration/Registration';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

function App() {
 

  return (
    <>
      <div className='app'>
     

        {/* <Home/> */}
        {/* <Login/> */}
        <Registration/>
        {/* <Dashboard/> */}
        
       </div>
       </>
  )
}

export default App;
