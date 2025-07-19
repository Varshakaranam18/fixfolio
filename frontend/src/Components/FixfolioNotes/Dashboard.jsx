import React, { useState, useEffect } from 'react';
import AddNoteModal from './AddNoteModal';
import NotesList from './NotesList';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { fetchNotes, addNote as apiAddNote } from './api';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const dashboardStyle = {
  display: 'flex',
  height: '100vh',
  background: '#f7f9fb',
  fontFamily: 'Inter, sans-serif',
};

const mainStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2.5rem',
  background: '#fff',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 1.2rem 1rem 2.5rem', // reduced right padding
  borderBottom: '1px solid #e5e7eb',
  marginBottom: '1.5rem'
};

const userNameStyle = {
  color: '#374151',
  fontWeight: 600,
  fontSize: '1.1rem'
};

const logoutStyle = {
  color: '#7c3aed',
  fontWeight: 500,
  fontSize: '0.95rem',
  textDecoration: 'none',
  background: 'none',
  border: '1px solid #7c3aed',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  transition: 'all 0.2s'
};

const addBtnStyle = {
  background: 'transparent',
  color: '#18181b',
  border: 'none',
  borderRadius: '50%',
  fontWeight: 700,
  fontSize: '2rem',
  padding: 0,
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: 'none',
};

const dashboardMobileStyle = {
  flexDirection: 'column',
  height: 'auto',
};
const mainMobileStyle = {
  padding: '0.5rem 0.5rem',
  minHeight: 'auto',
};
const headerMobileStyle = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem 0 0.5rem 0',
  marginBottom: '1rem',
};

export default function Dashboard() {
  const [showAdd, setShowAdd] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { user, logout } = useAuth();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Load notes from backend on mount
  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  const handleAddNote = async note => {
    const saved = await apiAddNote(note);
    setNotes([saved, ...notes]);
    setShowAdd(false);
  };

  const handleLogout = () => {
    logout();
  };

  // Optionally, add update and delete handlers here for future use

  // Use window width to determine mobile/desktop
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="dashboard-root" style={isMobile ? { ...dashboardStyle, ...dashboardMobileStyle } : dashboardStyle}>
      {sidebarExpanded && (
        <Sidebar 
          notes={notes} 
          filter={filter} 
          setFilter={setFilter}
          expanded={sidebarExpanded}
          onClose={() => setSidebarExpanded(false)}
        />
      )}
      <div 
        className="dashboard-main" 
        style={{
          ...(isMobile ? { ...mainStyle, ...mainMobileStyle } : mainStyle),
          marginLeft: !isMobile && sidebarExpanded ? 0 : 0,
          transition: 'margin-left 0.2s',
        }}
      >
        <div className="dashboard-header" style={isMobile ? { ...headerStyle, ...headerMobileStyle } : headerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
            {/* Sidebar toggle button (if collapsed) */}
            {!sidebarExpanded && (
              <button
                onClick={() => setSidebarExpanded(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#7c3aed',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.2rem',
                  padding: 0,
                }}
                aria-label="Expand sidebar"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="8" width="18" height="2.5" rx="1.2" fill="#7c3aed" />
                  <rect x="5" y="13" width="18" height="2.5" rx="1.2" fill="#7c3aed" />
                  <rect x="5" y="18" width="18" height="2.5" rx="1.2" fill="#7c3aed" />
                </svg>
              </button>
            )}
            {/* Home button */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }} title="Home">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
            </Link>
            {/* Greeting */}
            <span style={{
              ...userNameStyle,
              flex: 'unset',
              marginLeft: '0.5rem',
              whiteSpace: 'nowrap',
              minWidth: '180px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              Welcome back, {user?.username || 'User'}!
            </span>
            {/* Logout button */}
            <button style={logoutStyle} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="search-bar" style={{ margin: '0 0 1.5rem 0', maxWidth: 480 }}>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <NotesList
          notes={notes}
          filter={filter}
          search={search}
          onAdd={() => setShowAdd(true)}
          emptyStateClassName="empty-state"
        />
        <button
          className="add-btn-mobile"
          style={{ ...addBtnStyle, position: 'fixed', right: 36, bottom: 36, zIndex: 10 }}
          onClick={() => setShowAdd(true)}
        >
          <span style={{ color: '#18181b', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>+</span>
        </button>
        {showAdd && <AddNoteModal onClose={() => setShowAdd(false)} onSave={handleAddNote} />}
      </div>
    </div>
  );
} 