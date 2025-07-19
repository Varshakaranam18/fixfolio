import React from 'react';

const sidebarStyle = {
  width: '250px',
  background: '#18181b',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.2rem 1.5rem 1.5rem 1.5rem',
  boxSizing: 'border-box',
  minHeight: '100vh',
  fontFamily: 'Inter, sans-serif',
};

const logoStyle = {
  fontWeight: 900,
  fontSize: '1.5rem',
  marginBottom: '2.5rem',
  letterSpacing: '-0.5px',
  display: 'flex',
  alignItems: 'center',
};

const filterBtnStyle = (active) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: active ? 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)' : 'transparent',
  color: active ? '#fff' : '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1.08rem',
  padding: '0.85rem 1.1rem',
  marginBottom: '0.5rem',
  cursor: 'pointer',
  justifyContent: 'space-between',
  transition: 'background 0.18s',
  boxShadow: active ? '0 2px 8px rgba(124,60,237,0.10)' : undefined,
});

const countStyle = (active) => ({
  background: active ? '#fff' : 'rgba(255,255,255,0.18)',
  color: active ? '#7c3aed' : '#fff',
  borderRadius: '999px',
  fontWeight: 700,
  fontSize: '0.98rem',
  padding: '0.18rem 0.8rem',
  marginLeft: '0.7rem',
});

const statBoxStyle = {
  background: 'rgba(255,255,255,0.13)',
  borderRadius: '14px',
  padding: '1.2rem 0',
  width: '100%',
  textAlign: 'center',
  marginTop: '2.5rem',
  fontWeight: 700,
  fontSize: '1.2rem',
  letterSpacing: '0.01em',
};

const filters = [
  { key: 'all', label: 'All Notes', icon: '📚' },
  { key: 'today', label: 'Today', icon: '📅' },
  { key: 'week', label: 'This Week', icon: '📊' },
  { key: 'code', label: 'With Code', icon: '💻' },
];

export default function Sidebar({ notes, filter, setFilter, expanded = true, onClose }) {
  if (!expanded) return null;
  const today = new Date().toDateString();
  const weekAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);

  const counts = {
    all: notes.length,
    today: notes.filter(n => new Date(n.date).toDateString() === today).length,
    week: notes.filter(n => new Date(n.date) >= weekAgo).length,
    code: notes.filter(n => n.code && n.code.trim()).length,
  };

  return (
    <aside 
      className="sidebar-root expanded"
      style={{
        ...sidebarStyle,
        width: '250px',
        minWidth: '250px',
        maxWidth: '250px',
        background: '#18181b',
        padding: '2.2rem 1.5rem 1.5rem 1.5rem',
        transition: 'width 0.2s, background 0.2s',
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {/* Close button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem' }}>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#7c3aed',
            fontSize: '3.2rem',
            fontWeight: 900,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          aria-label="Collapse sidebar"
        >
          &times;
        </button>
      </div>
      <div className="sidebar-logo" style={logoStyle}>
        <span style={{ fontWeight: 900, fontSize: '1.7rem', color: '#fff', letterSpacing: '-0.5px' }}>Fixfolio</span>
      </div>
      {filters.map(f => (
        <button
          key={f.key}
          style={filterBtnStyle(filter === f.key)}
          onClick={() => setFilter(f.key)}
        >
          <span>{f.icon} {f.label}</span>
          <span style={countStyle(filter === f.key)}>{counts[f.key]}</span>
        </button>
      ))}
      <div className="sidebar-stat" style={statBoxStyle}>
        {counts.all} <div style={{ fontWeight: 400, fontSize: '1rem', color: '#ede9fe' }}>Total Notes</div>
      </div>
    </aside>
  );
}