import React from 'react';
import { GlobalProvider } from './context/GlobalStateContext';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './comps/Dashboard';
import Login from './comps/Login';

function App() {

  return (

    <GlobalProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/"  element={ <Dashboard/> }/>
            <Route path="/mmphotos"  element={ <Dashboard/> }/>
            <Route path="/login"  element={ <Login/> }/>
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
