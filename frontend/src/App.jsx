import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header.jsx';
import LandingSection from './Components/LandingSection.jsx';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import './App.css';
import React from 'react';
import { Dashboard as FixfolioNotesDashboard } from './Components/FixfolioNotes';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  React.useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      document.body.classList.remove('violet-bg');
      document.body.classList.remove('dashboard-bg');
    } else if (location.pathname === '/fixfolio-notes') {
      document.body.classList.add('dashboard-bg');
      document.body.classList.remove('violet-bg');
    } else {
      document.body.classList.add('violet-bg');
      document.body.classList.remove('dashboard-bg');
    }
    return () => {
      document.body.classList.remove('violet-bg');
      document.body.classList.remove('dashboard-bg');
    };
  }, [location.pathname]);
  
  return (
    <>
      {location.pathname !== '/fixfolio-notes' && <Header />}
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/fixfolio-notes" replace /> : <LoginPage />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/fixfolio-notes" replace /> : <SignUpPage />
        } />
        <Route path="/fixfolio-notes" element={
          <ProtectedRoute>
            <FixfolioNotesDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;

