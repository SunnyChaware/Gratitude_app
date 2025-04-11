import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation.jsx'
import Settings from './Pages/Settings';

function App() {

  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
