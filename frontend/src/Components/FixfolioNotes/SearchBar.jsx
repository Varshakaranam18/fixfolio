import React from 'react';

const barStyle = {
  background: '#fff',
  border: '1.5px solid #e5e7eb',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  padding: '0.2rem 1.1rem',
  minWidth: '320px',
  boxShadow: '0 1px 2px rgba(30,41,59,0.04)',
};

const inputStyle = {
  border: 'none',
  outline: 'none',
  fontSize: '1.08rem',
  background: 'transparent',
  marginLeft: '0.7rem',
  width: '100%',
  color: '#18181b',
  padding: '0.7rem 0',
};

export default function SearchBar({ search, setSearch }) {
  return (
    <div style={barStyle}>
      <span style={{ color: '#a1a1aa', fontSize: '1.2rem' }}>🔍</span>
      <input
        style={inputStyle}
        type="text"
        placeholder="Search notes, tags, or code..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
} 