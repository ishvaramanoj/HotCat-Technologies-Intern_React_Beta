import './App.css'
import React from 'react'
import Home from './Components/Pages/Home/Home'
import ReactDOM from "react-dom/client";
import Login from './Components/Pages/Login/Login'
import Registration from './Components/Pages/Registration/Registration';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
 

  return (
    
      <div className='app'>
     {/* <BrowserRouter>
     <Routes>
     <Route index element={<Home />}/>
     <Route path="/home" element={<Home />}/>
     </Routes>
     </BrowserRouter> */}

        <Home/>
        {/* <Login/> */}
        {/* <Registration/> */}
        {/* <Dashboard/> */}
        
       </div>
       
  )
}
export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
