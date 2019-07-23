import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
