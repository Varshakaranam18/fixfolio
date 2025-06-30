import React, { useState, useEffect, useRef } from 'react';
import CodeSnippetCard from './Components/CodeSnippetCard.jsx';
import AboutSection from './Components/AboutSection.jsx';
import JumpButton from './Components/JumpButton.jsx';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

export default function LandingSection() {
  const isMobile = useIsMobile();
  const aboutRef = useRef(null);
  const [learnMoreHover, setLearnMoreHover] = useState(false);

  const landingSectionStyle = {
    minHeight: '100vh',
    minWidth: '100vw',
    width: '100vw',
    background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
    display: 'flex',
    alignItems: isMobile ? 'flex-start' : 'center',
    fontFamily: 'Inter, sans-serif',
    paddingTop: isMobile ? '1.5rem' : 0,
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    alignItems: isMobile ? 'stretch' : 'center',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
    gap: isMobile ? '1.5rem' : '3rem',
    padding: isMobile ? '1rem' : '2rem',
    boxSizing: 'border-box'
  };

  const leftColStyle = {
    flex: 1,
    color: '#fff',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isMobile ? 'flex-start' : 'center',
    alignItems: isMobile ? 'flex-start' : undefined,
    paddingLeft: isMobile ? 0 : '20rem',
    paddingBottom: isMobile ? 0 : '13rem',
    paddingRight: isMobile ? 0 : '2rem',
    marginBottom: isMobile ? '2rem' : 0,
  };

  const rightColStyle = {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-end',
    paddingRight: isMobile ? 0 : '15rem',
  };

  const headingStyle = {
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: 700,
    marginBottom: '1.2rem',
    lineHeight: 1.1
  };

  const descStyle = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    marginBottom: isMobile ? '1.5rem' : '2.5rem',
    color: 'rgba(255,255,255,0.92)',
    maxWidth: 520
  };

  const buttonRowStyle = {
    display: 'flex',
    gap: isMobile ? '0.7rem' : '1.2rem',
    alignItems: 'center',
    flexWrap: isMobile ? 'wrap' : 'nowrap'
  };

  const getStartedBtnStyle = {
    background: '#fff',
    color: '#7c3aed',
    fontWeight: 600,
    fontSize: isMobile ? '1rem' : '1.1rem',
    border: 'none',
    borderRadius: '10px',
    padding: isMobile ? '0.7rem 1.5rem' : '0.9rem 2.2rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(30,41,59,0.10)'
  };

  const learnMoreBtnStyle = {
    background: 'transparent',
    color: '#fff',
    fontWeight: 500,
    fontSize: isMobile ? '1rem' : '1.1rem',
    border: 'none',
    padding: isMobile ? '0.7rem 1.1rem' : '0.9rem 1.5rem',
    cursor: 'pointer',
  };

  return (
    <>
      <div style={landingSectionStyle}>
        <div style={flexContainerStyle}>
          {/* Left column */}
          <div style={leftColStyle}>
            <h1 style={headingStyle}>
              Your personal<br />developer journal
            </h1>
            <p style={descStyle}>
              Save code snippets, bug fixes, terminal commands, and daily dev notes — searchable, taggable, and optionally exportable.
            </p>
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
      <AboutSection ref={aboutRef} />
    </>
  );
} 