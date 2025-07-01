import React from 'react';

const windowHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  background: '#23272f',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  padding: '0.75rem 1rem',
  color: '#fff',
  fontWeight: 500,
  fontSize: '1rem',
  justifyContent: 'space-between',
};

const circlesStyle = {
  display: 'flex',
  gap: '0.4rem',
};

const circle = color => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
});

const cardStyle = {
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(30, 41, 59, 0.12)',
  width: '90%',
  maxWidth: '900px',
  margin: '0 auto',
  overflow: 'hidden',
  fontFamily: 'inherit',
};

const contentStyle = {
  padding: '1.5rem 1.5rem 1rem 1.5rem',
};

const titleRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
};

const tagsStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '0.5rem',
};

const tagColors = {
  docker: '#e0e7ff',
  container: '#d1fae5',
  devops: '#f3e8ff',
};

const tagTextColors = {
  docker: '#3730a3',
  container: '#065f46',
  devops: '#7c3aed',
};

const tagStyle = tag => ({
  background: tagColors[tag] || '#f3f4f6',
  color: tagTextColors[tag] || '#374151',
  borderRadius: '999px',
  padding: '0.2rem 0.8rem',
  fontSize: '0.85rem',
  fontWeight: 500,
  textTransform: 'capitalize',
});

const codeBlockStyle = {
  background: '#23272f',
  color: '#fff',
  borderRadius: '10px',
  padding: '1rem',
  fontFamily: 'monospace',
  fontSize: '1rem',
  marginBottom: '0.75rem',
  whiteSpace: 'pre-line',
};

const descStyle = {
  color: '#374151',
  fontSize: '0.98rem',
  marginTop: '0.5rem',
};

const CodeSnippetCard = ({
  title,
  tags = [],
  updated,
  code,
  description,
}) => (
  <div style={cardStyle}>
    <div style={windowHeaderStyle}>
      <span>Fixfolio - Code Snippet</span>
      <span style={circlesStyle}>
        <span style={circle('#f87171')} />
        <span style={circle('#fbbf24')} />
        <span style={circle('#34d399')} />
      </span>
    </div>
    <div style={contentStyle}>
      <div style={titleRowStyle}>
        <h2 style={{fontSize: '1.25rem', fontWeight: 600, margin: 0}}>{title}</h2>
        <span style={{color: '#6b7280', fontSize: '0.95rem'}}>Updated {updated}</span>
      </div>
      <div style={tagsStyle}>
        {tags.map(tag => (
          <span key={tag} style={tagStyle(tag)}>{tag}</span>
        ))}
      </div>
      <pre style={codeBlockStyle}>{code}</pre>
      <div style={descStyle}>{description}</div>
    </div>
  </div>
);

export default CodeSnippetCard; 