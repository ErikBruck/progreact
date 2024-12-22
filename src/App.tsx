import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import Profile from './pages/ProfilePage'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
