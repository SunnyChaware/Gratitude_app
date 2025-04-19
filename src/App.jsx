import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation.jsx'
import Settings from './Pages/Settings';
import Profile from './Pages/Profile.jsx';
import Landing from './Components/Landing.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import AddGratitude from './Components/AddGratitude.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-gratitude" element={<AddGratitude />} />
      </Routes>
    </>
  )
}

export default App