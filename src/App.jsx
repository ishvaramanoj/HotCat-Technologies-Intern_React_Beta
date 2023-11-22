import React from 'react'
import './App.css'
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login/Login'
import Registration from './Components/Pages/Registration/Registration';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";


const router = createBrowserRouter([
{
  path:"/",
  element:<Home/>,
},
{
  path:"/login",
  element:<Login/>,
},
{
  path:"/Registration",
  element:<Registration/>,
},
{
  path:"/Dashboard",
  element:<Dashboard/>,
}

]);

function App() {
 

  return (
    
      <div className='app'>

        <RouterProvider router={router}/>


       </div>
       
  )
}
export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
