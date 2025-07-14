import React, { useRef } from 'react';
import CodeSnippetCard from './CodeSnippetCard.jsx';
import AboutSection from './AboutSection.jsx';
import JumpButton from './JumpButton.jsx';

export default function LandingSection() {
  const aboutRef = useRef(null);

  const landingSectionStyle = {
    minHeight: '100vh',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    background: 'none',
    overflow: 'auto',
  };

  const containerStyle = {
    minWidth: '1088px',
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    minHeight: '100vh',
    boxSizing: 'border-box',
    paddingTop: '6.5rem', // for fixed header
    paddingLeft: '120px',
  };

  const leftColStyle = {
    width: '600px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    gap: '2.2rem',
  };

  const rightColStyle = {
    width: '440px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '3.2rem',
    fontWeight: 800,
    lineHeight: 1.13,
    margin: 0,
    letterSpacing: '-1.5px',
  };

  const descStyle = {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,0.92)',
    margin: 0,
    maxWidth: 520,
    lineHeight: 1.5,
    fontWeight: 400,
  };

  const buttonRowStyle = {
    display: 'flex',
    gap: '1.3rem',
    alignItems: 'center',
    marginTop: '1.7rem',
  };

  const getStartedBtnStyle = {
    background: '#fff',
    color: '#7c3aed',
    fontWeight: 700,
    fontSize: '1.13rem',
    border: 'none',
    borderRadius: '10px',
    padding: '1.05rem 2.3rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(30,41,59,0.10)',
    transition: 'background 0.2s',
  };

  const learnMoreBtnStyle = {
    background: 'transparent',
    color: '#fff',
    fontWeight: 500,
    fontSize: '1.13rem',
    border: 'none',
    padding: '1.05rem 1.5rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'color 0.2s',
  };

  return (
    <>
      <div style={landingSectionStyle}>
        <div style={{ width: '100vw', overflowX: 'auto' }}>
          <div style={containerStyle}>
            {/* Left column */}
            <div style={leftColStyle}>
              <h1 style={headingStyle}>
                Your personal<br />developer journal
              </h1>
              <div style={{ marginTop: '1.2rem' }}>
                <p style={descStyle}>
                  Save code snippets, bug fixes, terminal commands, and daily dev notes — searchable, taggable, and optionally exportable.
                </p>
              </div>
              <div style={buttonRowStyle}>
                <JumpButton style={getStartedBtnStyle}>
                  Get Started Free
                </JumpButton>
                <JumpButton
                  style={learnMoreBtnStyle}
                  onClick={() => {
                    if (aboutRef.current) {
                      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn more
                </JumpButton>
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
      </div>
      <AboutSection ref={aboutRef} />
    </>
  );
} 