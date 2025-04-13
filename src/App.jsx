import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation.jsx'
import Settings from './Pages/Settings';
import Profile from './Pages/Profile.jsx';
import Landing from './Components/Landing.jsx';

function App() {

  return (
    <>
      <div>
        {/* <Navigation /> */}
        <Landing />
      </div>
      {/* <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
    </>
  )
}

export default App
