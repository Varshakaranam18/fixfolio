import React, { useState, useEffect } from 'react';
import AddNoteModal from './AddNoteModal';
import NotesList from './NotesList';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

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

const addBtnStyle = {
  background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '0.8rem 1.7rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(124,60,237,0.10)',
};

export default function Dashboard() {
  const [showAdd, setShowAdd] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Load notes from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('fixfolio_notes');
    if (stored) {
      setNotes(JSON.parse(stored));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('fixfolio_notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = note => {
    setNotes([note, ...notes]);
    setShowAdd(false);
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar notes={notes} filter={filter} setFilter={setFilter} />
      <div style={mainStyle}>
        <div style={{ margin: '2.5rem 0 1.5rem 0', maxWidth: 480 }}>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <NotesList
          notes={notes}
          filter={filter}
          search={search}
          onAdd={() => setShowAdd(true)}
        />
        <button
          style={{ ...addBtnStyle, position: 'fixed', right: 36, bottom: 36, zIndex: 10 }}
          onClick={() => setShowAdd(true)}
        >
          +
        </button>
        {showAdd && <AddNoteModal onClose={() => setShowAdd(false)} onSave={handleAddNote} />}
      </div>
    </div>
  );
} 