import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

import './app.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </div>
   );
}
export default App;
 