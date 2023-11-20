import './App.css'
import React from 'react'
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login/Login'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";

function App() {
 

  return (
    <>
      <div className='app'>
     

      <BrowserRouter>
      <main>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />

      </Routes>
      </main>
      </BrowserRouter>
        
       </div>
       </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
