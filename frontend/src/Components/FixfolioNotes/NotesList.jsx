import React, { useState } from 'react';
import { useRef } from 'react';

const emptyStateStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 180px)',
  color: '#6b7280',
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
  marginTop: '1.5rem',
  boxShadow: '0 2px 8px rgba(124,60,237,0.10)',
};

const titleBtnStyle = {
  background: '#fff',
  color: '#7c3aed',
  border: '1.5px solid #ede9fe',
  borderRadius: '8px',
  fontWeight: 700,
  fontSize: '1.13rem',
  padding: '1.1rem 1.5rem',
  margin: '0 1.5rem 1.2rem 1.5rem',
  width: 'calc(100% - 3rem)',
  textAlign: 'left',
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(30,41,59,0.06)',
  transition: 'background 0.15s',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(30,41,59,0.18)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalStyle = {
  background: '#fff',
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(30, 41, 59, 0.16)',
  width: '420px',
  padding: '2.2rem 2.2rem 1.7rem 2.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  fontFamily: 'Inter, sans-serif',
  position: 'relative',
};

const closeBtnStyle = {
  position: 'absolute',
  top: 18,
  right: 18,
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  color: '#a1a1aa',
  cursor: 'pointer',
};

const tagStyle = {
  background: '#ede9fe',
  color: '#7c3aed',
  borderRadius: '999px',
  padding: '0.18rem 0.8rem',
  fontSize: '0.93rem',
  fontWeight: 500,
  marginRight: '0.5rem',
};

function filterNotes(notes, filter) {
  const today = new Date().toDateString();
  const weekAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  if (filter === 'today') return notes.filter(n => new Date(n.date).toDateString() === today);
  if (filter === 'week') return notes.filter(n => new Date(n.date) >= weekAgo);
  if (filter === 'code') return notes.filter(n => n.code && n.code.trim());
  return notes;
}

export default function NotesList({ notes, filter, search, onAdd }) {
  const [selected, setSelected] = useState(null);
  const filtered = filterNotes(notes, filter).filter(n => {
    const s = search.toLowerCase();
    return (
      n.title.toLowerCase().includes(s) ||
      n.description.toLowerCase().includes(s) ||
      (n.tags && n.tags.join(',').toLowerCase().includes(s)) ||
      (n.code && n.code.toLowerCase().includes(s))
    );
  });

  if (notes.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" alt="No notes" width={80} height={80} style={{ marginBottom: 18 }} />
        <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#18181b', marginBottom: 6 }}>No notes yet</div>
        <div style={{ marginBottom: 10 }}>Start building your knowledge base by adding your first note!</div>
        <button style={addBtnStyle} onClick={onAdd}>✨ Add Your First Note</button>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      {filtered.length === 0 ? (
        <div style={emptyStateStyle}>
          <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#18181b', marginBottom: 6 }}>No notes found</div>
          <div style={{ marginBottom: 10 }}>Try a different search or filter.</div>
        </div>
      ) : (
        filtered.map(note => (
          <button
            key={note.id}
            style={titleBtnStyle}
            onClick={() => setSelected(note)}
          >
            {note.title}
          </button>
        ))
      )}
      {selected && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <button style={closeBtnStyle} onClick={() => setSelected(null)}>×</button>
            <div style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 10 }}>{selected.title}</div>
            <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#7c3aed', marginBottom: 8 }}>{selected.title}</div>
            <div style={{ color: '#6b7280', fontSize: '1.01rem', marginBottom: 8 }}>{selected.description}</div>
            <div style={{ marginBottom: 8 }}>
              {selected.tags && selected.tags.map(tag => (
                <span key={tag} style={tagStyle}>{tag}</span>
              ))}
            </div>
            {selected.code && (
              <CodeWithCopy code={selected.code} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CodeWithCopy({ code }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div style={{ position: 'relative' }}>
      <pre ref={codeRef} style={{ background: '#23272f', color: '#fff', borderRadius: 10, padding: '1rem', fontSize: '1.01rem', overflowX: 'auto', margin: 0 }}>{code}</pre>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: copied ? '#7c3aed' : '#ede9fe',
          color: copied ? '#fff' : '#7c3aed',
          border: 'none',
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '0.98rem',
          padding: '0.3rem 0.8rem',
          cursor: 'pointer',
          transition: 'background 0.18s',
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
} 