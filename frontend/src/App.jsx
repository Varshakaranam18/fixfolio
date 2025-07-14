import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header.jsx';
import LandingSection from './Components/LandingSection.jsx';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import './App.css';
import React from 'react';

function AppRoutes() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      document.body.classList.remove('violet-bg');
    } else {
      document.body.classList.add('violet-bg');
    }
    return () => {
      document.body.classList.remove('violet-bg');
    };
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

