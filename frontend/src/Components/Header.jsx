import React from 'react';

const headerStyle = {
  width: '100%',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem 2.5rem',
  boxSizing: 'border-box',
  boxShadow: '0 1px 0 0 #f3f4f6',
  position: 'relative',
  zIndex: 10
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: '#18181b',
  letterSpacing: '-0.5px'
};

const iconStyle = {
  marginRight: '1rem',
  display: 'inline-block',
  marginTop: '0.5rem',
};

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem'
};

const loginStyle = {
  color: '#5b3df6',
  fontWeight: 500,
  fontSize: '1.05rem',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
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
  boxShadow: '0 1px 4px rgba(91,61,246,0.08)'
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <span style={iconStyle}>
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
      <div style={rightStyle}>
        <a href="#" style={loginStyle}>Log in</a>
        <button style={signupStyle}>Sign up</button>
      </div>
    </header>
  );
} 