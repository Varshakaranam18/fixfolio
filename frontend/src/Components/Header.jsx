import React, { useState } from 'react';
import JumpButton from './JumpButton';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const headerStyle = {
  width: '100vw',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem 2.5rem',
  boxSizing: 'border-box',
  boxShadow: '0 1px 0 0 #f3f4f6',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: '#18181b',
  letterSpacing: '-0.5px',
};

const iconStyle = {
  marginRight: '1rem',
  display: 'inline-block',
  marginTop: '0.5rem',
};

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
};

const loginStyle = {
  color: '#5b3df6',
  fontWeight: 500,
  fontSize: '1.05rem',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const signupStyle = {
  background: '#5b3df6',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.05rem',
  border: 'none',
  borderRadius: '8px',
  padding: '0.55rem 1.3rem',
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(91,61,246,0.08)',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const userNameStyle = {
  color: '#374151',
  fontWeight: 500,
  fontSize: '1rem',
};

const logoutStyle = {
  color: '#dc2626',
  fontWeight: 500,
  fontSize: '1rem',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  transition: 'background-color 0.2s',
};

const dashboardStyle = {
  color: '#5b3df6',
  fontWeight: 500,
  fontSize: '1rem',
  textDecoration: 'none',
  background: 'none',
  border: '1px solid #5b3df6',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  transition: 'background-color 0.2s',
};

const mobileMenuButtonStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
};

const mobileMenuStyle = {
  position: 'fixed',
  top: '100%',
  left: 0,
  right: 0,
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: '1rem',
  display: 'none',
  flexDirection: 'column',
  gap: '0.5rem',
  zIndex: 999,
};

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header style={headerStyle} className="header-container">
      <div style={logoStyle} className="header-logo">
        <span style={iconStyle} className="header-icon">
          {/* Larger modern folder with star icon */}
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect x="3.5" y="11" width="31" height="16" rx="4" fill="#ede9fe"/>
            <path d="M3.5 15a4 4 0 0 1 4-4h7.2a4 4 0 0 1 3.2 1.6l1.6 2.1a4 4 0 0 0 3.2 1.6h9.3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-25a4 4 0 0 1-4-4v-9z" fill="#a5b4fc"/>
            <rect x="3.5" y="11" width="31" height="16" rx="4" stroke="#7c3aed" strokeWidth="2"/>
            <g>
              <circle cx="29" cy="18" r="3.2" fill="#7c3aed"/>
              <path d="M29 16.2l.7 1.6h1.7l-1.3 1 .5 1.6-1.4-1-1.4 1 .5-1.6-1.3-1h1.7z" fill="#fff"/>
            </g>
          </svg>
        </span>
        <span style={{ fontWeight: 900, fontSize: '1.7rem', letterSpacing: '-0.5px', marginLeft: '0.1rem' }}>
          <span style={{ color: '#7c3aed' }}>F</span>
          <span style={{ color: '#7c3aed' }}>I</span>
          <span style={{ color: '#7c3aed' }}>X</span>
          <span style={{ color: 'black' }}>F</span>
          <span style={{ color: 'black' }}>O</span>
          <span style={{ color: 'black' }}>L</span>
          <span style={{ color: 'black' }}>I</span>
          <span style={{ color: 'black' }}>O</span>
        </span>
      </div>
      
      {/* Desktop Menu */}
      <div style={rightStyle} className="header-right">
        {isAuthenticated ? (
          <div style={userInfoStyle} className="header-user-info">
            <span style={userNameStyle} className="header-user-name">Welcome, {user?.name || 'User'}!</span>
            <Link to="/fixfolio-notes" style={dashboardStyle} className="header-dashboard-btn">Dashboard</Link>
            <button style={logoutStyle} className="header-logout-btn" onClick={handleLogout}>Logout</button>
            {/* Mobile Menu Button - Always visible on mobile */}
            <button style={mobileMenuButtonStyle} className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        ) : (
          <>
            <JumpButton style={loginStyle} className="header-login-btn" onClick={() => navigate('/login')}>Log in</JumpButton>
            <JumpButton style={signupStyle} className="header-signup-btn" onClick={() => navigate('/signup')}>Sign up</JumpButton>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={mobileMenuStyle} className="mobile-menu">
          {isAuthenticated ? (
            <>
              <span style={userNameStyle} className="header-user-name">Welcome, {user?.name || 'User'}!</span>
              <Link to="/fixfolio-notes" style={dashboardStyle} className="header-dashboard-btn" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
              <button style={logoutStyle} className="header-logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <JumpButton style={loginStyle} className="header-login-btn" onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>Log in</JumpButton>
              <JumpButton style={signupStyle} className="header-signup-btn" onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}>Sign up</JumpButton>
            </>
          )}
        </div>
      )}
    </header>
  );
} 