import React from 'react'
import Home from './Retink_Body/Home'
import './App.css'
import AOS from 'aos';

function App() {
AOS.init();
AOS.refresh();
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
