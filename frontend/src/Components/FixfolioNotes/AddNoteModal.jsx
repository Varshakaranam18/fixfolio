import React, { useState } from 'react';

const overlayStyle = {
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

const labelStyle = {
  fontWeight: 700,
  fontSize: '1.08rem',
  marginBottom: 4,
  color: '#18181b',
};

const inputStyle = {
  width: '100%',
  border: '1.5px solid #e5e7eb',
  borderRadius: '10px',
  padding: '0.9rem 1rem',
  fontSize: '1.08rem',
  marginBottom: '0.7rem',
  background: '#f9fafb',
  color: '#18181b',
  outline: 'none',
};

const saveBtnStyle = {
  background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '0.9rem 1.7rem',
  cursor: 'pointer',
  marginRight: '1.2rem',
  boxShadow: '0 2px 8px rgba(30,41,59,0.10)',
};

const cancelBtnStyle = {
  background: '#f3f4f6',
  color: '#6366f1',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '0.9rem 1.7rem',
  cursor: 'pointer',
};

export default function AddNoteModal({ onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [code, setCode] = useState('');

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      id: Date.now(),
      title,
      description,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      code,
      date: new Date().toISOString(),
    });
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeBtnStyle} onClick={onClose}>×</button>
        <div style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 10 }}>✨ Create New Note</div>
        <div>
          <div style={labelStyle}>📝 Title</div>
          <input
            style={inputStyle}
            placeholder="Enter a descriptive title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div style={labelStyle}>📄 Description</div>
          <textarea
            style={{ ...inputStyle, minHeight: 60, resize: 'vertical' }}
            placeholder="What's this note about?"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div style={labelStyle}>🏷️ Tags</div>
          <input
            style={inputStyle}
            placeholder="javascript, react, api, tutorial..."
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
          <div style={{ color: '#a1a1aa', fontSize: '0.98rem', marginTop: 2 }}>Separate tags with commas</div>
        </div>
        <div>
          <div style={labelStyle}>💻 Code Snippet (Optional)</div>
          <textarea
            style={{ ...inputStyle, minHeight: 60, fontFamily: 'monospace', resize: 'vertical' }}
            placeholder="// Paste your code here..."
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
          <button style={saveBtnStyle} onClick={handleSave}>💾 Save Note</button>
          <button style={cancelBtnStyle} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
} 