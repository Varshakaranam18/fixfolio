import React from 'react';

const cardStyle = {
  background: '#fff',
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(30, 41, 59, 0.16)',
  width: '100%',
  maxWidth: '440px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: 'Inter, sans-serif',
};

const windowHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  background: '#23272f',
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  padding: '0.7rem 1.2rem',
  color: '#fff',
  fontWeight: 500,
  fontSize: '1.05rem',
  justifyContent: 'space-between',
};

const circlesStyle = {
  display: 'flex',
  gap: '0.35rem',
};

const circle = color => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
});

const contentStyle = {
  padding: '1.2rem 1.2rem 1rem 1.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
  height: '100%',
  boxSizing: 'border-box',
};

const titleRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
};

const tagsStyle = {
  display: 'flex',
  gap: '0.6rem',
  marginBottom: '0.5rem',
  flexWrap: 'wrap',
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
  padding: '0.22rem 1.1rem',
  fontSize: '0.93rem',
  fontWeight: 500,
  textTransform: 'capitalize',
  letterSpacing: '0.01em',
});

const codeBlockStyle = {
  background: '#23272f',
  color: '#fff',
  borderRadius: '12px',
  padding: '0.7rem',
  fontFamily: 'Menlo, Monaco, Consolas, monospace',
  fontSize: '0.93rem',
  marginBottom: '0.3rem',
  whiteSpace: 'pre',
  overflowX: 'auto',
  maxWidth: '100%',
  boxSizing: 'border-box',
  lineHeight: 1.5,
};

const descStyle = {
  color: '#6b7280',
  fontSize: '0.93rem',
  marginTop: '0.3rem',
  lineHeight: 1.4,
};

const titleStyle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  margin: 0,
};

const updatedStyle = {
  color: '#6b7280',
  fontSize: '1.01rem',
  fontWeight: 500,
};

const CodeSnippetCard = ({
  title,
  tags = [],
  updated,
  code,
  description,
}) => (
  <div style={cardStyle} className="code-snippet-card">
    <div style={windowHeaderStyle} className="code-snippet-header">
      <span>Fixfolio - Code Snippet</span>
      <span style={circlesStyle} className="code-snippet-circles">
        <span style={circle('#f87171')} className="code-snippet-circle" />
        <span style={circle('#fbbf24')} className="code-snippet-circle" />
        <span style={circle('#34d399')} className="code-snippet-circle" />
      </span>
    </div>
    <div style={contentStyle} className="code-snippet-content">
      <div style={titleRowStyle} className="code-snippet-title-row">
        <h2 style={titleStyle} className="code-snippet-title">{title}</h2>
        <span style={updatedStyle} className="code-snippet-updated">Updated {updated}</span>
      </div>
      <div style={tagsStyle} className="code-snippet-tags">
        {tags.map(tag => (
          <span key={tag} style={tagStyle(tag)} className="code-snippet-tag">{tag}</span>
        ))}
      </div>
      <pre style={codeBlockStyle} className="code-snippet-code">{code}</pre>
      <div style={descStyle} className="code-snippet-desc">{description}</div>
    </div>
  </div>
);

export default CodeSnippetCard; 