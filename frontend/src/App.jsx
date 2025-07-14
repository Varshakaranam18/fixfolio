import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header.jsx';
import LandingSection from './Components/LandingSection.jsx';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import './App.css';
import React from 'react';
import { Dashboard as FixfolioNotesDashboard } from './Components/FixfolioNotes';

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
      {location.pathname !== '/fixfolio-notes' && <Header />}
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/fixfolio-notes" element={<FixfolioNotesDashboard />} />
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

