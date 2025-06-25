import React from 'react';
import CodeSnippetCard from './Components/CodeSnippetCard.jsx';

const landingSectionStyle = {
  minHeight: '100vh',
  minWidth: '100vw',
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const flexContainerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: '3rem',
  padding: '2rem',
  boxSizing: 'border-box'
};

const leftColStyle = {
  flex: 1,
  color: '#fff',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '20rem',
  paddingBottom: '13rem'
};

const rightColStyle = {
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  paddingRight: '15rem'
};

export default function LandingSection() {
  return (
    <div style={landingSectionStyle}>
      <div style={flexContainerStyle}>
        {/* Left column */}
        <div style={leftColStyle}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.2rem', lineHeight: 1.1 }}>
            Your personal<br />developer journal
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.92)', maxWidth: 520 }}>
            Save code snippets, bug fixes, terminal commands, and daily dev notes — searchable, taggable, and optionally exportable.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <button style={{
              background: '#fff',
              color: '#7c3aed',
              fontWeight: 600,
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '10px',
              padding: '0.9rem 2.2rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(30,41,59,0.10)'
            }}>
              Get Started Free
            </button>
            <button style={{
              background: 'transparent',
              color: '#fff',
              fontWeight: 500,
              fontSize: '1.1rem',
              border: 'none',
              padding: '0.9rem 1.5rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}>
              Learn more
            </button>
          </div>
        </div>
        {/* Right column */}
        <div style={rightColStyle}>
          <CodeSnippetCard
            title="Docker Container Restart"
            tags={['docker', 'container', 'devops']}
            updated="2 days ago"
            code={`# Restart a specific container\ndocker restart container_name\n\n# List all running containers\ndocker ps\n\n# Stop and remove all containers\ndocker stop $(docker ps -a -q)\ndocker rm $(docker ps -a -q)`}
            description="Quick commands to manage Docker containers when they need to be restarted or cleaned up. Useful for when containers get stuck or need refreshing."
          />
        </div>
      </div>
    </div>
  );
} 