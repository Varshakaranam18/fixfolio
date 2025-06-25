import React, { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

const sectionStyle = {
  width: '100%',
  background: '#fff',
  padding: '3.5rem 0 2.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#18181b',
  textAlign: 'center',
  marginBottom: '0.7rem',
};

const subtitleStyle = {
  fontSize: '1.18rem',
  color: '#6b7280',
  textAlign: 'center',
  marginBottom: '2.7rem',
  lineHeight: 1.5,
  maxWidth: 600,
};

const cardsRowStyle = {
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '3.5rem',
};

const cardStyle = {
  background: '#f9fafb',
  borderRadius: '18px',
  boxShadow: '0 2px 12px rgba(30,41,59,0.06)',
  padding: '2.2rem 2rem 1.7rem 2rem',
  minWidth: 260,
  maxWidth: 320,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const iconBoxStyle = {
  background: '#ede9fe',
  borderRadius: '12px',
  width: '2.7rem',
  height: '2.7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.1rem',
};

const cardTitleStyle = {
  fontWeight: 700,
  fontSize: '1.1rem',
  color: '#18181b',
  marginBottom: '0.5rem',
};

const cardDescStyle = {
  color: '#6b7280',
  fontSize: '1rem',
  lineHeight: 1.5,
};

export default function AboutSection() {
  const isMobile = useIsMobile();

  const sectionStyle = {
    width: '100%',
    background: '#fff',
    padding: isMobile ? '2rem 0 1.5rem 0' : '3.5rem 0 2.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: isMobile ? '1.3rem' : '2rem',
    fontWeight: 700,
    color: '#18181b',
    textAlign: 'center',
    marginBottom: isMobile ? '0.5rem' : '0.7rem',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.18rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: isMobile ? '1.5rem' : '2.7rem',
    lineHeight: 1.5,
    maxWidth: 600,
  };

  const cardsRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1.2rem' : '2rem',
    justifyContent: 'center',
    width: '100%',
    marginBottom: isMobile ? '2rem' : '3.5rem',
    alignItems: isMobile ? 'center' : 'stretch',
  };

  const cardStyle = {
    background: '#f9fafb',
    borderRadius: '18px',
    boxShadow: '0 2px 12px rgba(30,41,59,0.06)',
    padding: isMobile ? '1.3rem 1rem 1.1rem 1rem' : '2.2rem 2rem 1.7rem 2rem',
    minWidth: isMobile ? 0 : 260,
    maxWidth: isMobile ? 340 : 320,
    width: isMobile ? '90%' : 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const iconBoxStyle = {
    background: '#ede9fe',
    borderRadius: '12px',
    width: isMobile ? '2.1rem' : '2.7rem',
    height: isMobile ? '2.1rem' : '2.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: isMobile ? '0.7rem' : '1.1rem',
  };

  const cardTitleStyle = {
    fontWeight: 700,
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: '#18181b',
    marginBottom: isMobile ? '0.3rem' : '0.5rem',
  };

  const cardDescStyle = {
    color: '#6b7280',
    fontSize: isMobile ? '0.95rem' : '1rem',
    lineHeight: 1.5,
  };

  const iconSize = isMobile ? 20 : 26;

  // How It Works Section
  const howSectionStyle = {
    width: '100%',
    background: '#f8fafc',
    padding: isMobile ? '2.2rem 0 1.2rem 0' : '3.5rem 0 2.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const howTitleStyle = {
    fontSize: isMobile ? '1.25rem' : '2.1rem',
    fontWeight: 700,
    color: '#18181b',
    textAlign: 'center',
    marginBottom: isMobile ? '0.5rem' : '1.1rem',
  };
  const howSubtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.18rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: isMobile ? '1.5rem' : '2.7rem',
    lineHeight: 1.5,
    maxWidth: 600,
  };
  const stepsRowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1.2rem' : '2.5rem',
    justifyContent: 'center',
    width: '100%',
    alignItems: isMobile ? 'center' : 'flex-start',
  };
  const stepStyle = {
    flex: 1,
    minWidth: isMobile ? 0 : 220,
    maxWidth: isMobile ? 340 : 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: isMobile ? '1.2rem' : 0,
  };
  const stepNumStyle = {
    background: '#5b3df6',
    color: '#fff',
    fontWeight: 700,
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    borderRadius: '10px',
    width: isMobile ? '2.2rem' : '2.7rem',
    height: isMobile ? '2.2rem' : '2.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto',
  };
  const stepTitleStyle = {
    fontWeight: 700,
    fontSize: isMobile ? '1.05rem' : '1.15rem',
    marginBottom: '0.5rem',
    color: '#18181b',
  };
  const stepDescStyle = {
    color: '#6b7280',
    fontSize: isMobile ? '0.97rem' : '1rem',
    lineHeight: 1.5,
  };

  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>Never lose your code solutions again</div>
      <div style={subtitleStyle}>
        Fixfolio helps you organize and retrieve your development knowledge<br />
        when you need it most.
      </div>
      <div style={cardsRowStyle}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            {/* Magnifier icon */}
            <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 26 26">
              <circle cx="12" cy="12" r="8" stroke="#7c3aed" strokeWidth="2" />
              <rect x="18.2" y="18.2" width="5" height="2" rx="1" transform="rotate(45 18.2 18.2)" fill="#7c3aed" />
            </svg>
          </div>
          <div style={cardTitleStyle}>Powerful Search</div>
          <div style={cardDescStyle}>
            Find any snippet, command, or note with lightning-fast search across all your entries.
          </div>
        </div>
        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            {/* Tag icon */}
            <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 26 26">
              <rect x="5" y="7" width="16" height="10" rx="4" stroke="#7c3aed" strokeWidth="2" fill="#ede9fe" />
              <circle cx="9.5" cy="13" r="1.5" fill="#7c3aed" />
            </svg>
          </div>
          <div style={cardTitleStyle}>Smart Tagging</div>
          <div style={cardDescStyle}>
            Organize your content with custom tags for easy filtering and categorization.
          </div>
        </div>
        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            {/* Export icon */}
            <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 26 26">
              <rect x="6" y="6" width="14" height="14" rx="3" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
              <path d="M13 10v5m0 0l-2-2m2 2l2-2" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={cardTitleStyle}>Export Options</div>
          <div style={cardDescStyle}>
            Export your knowledge base in multiple formats for backup or sharing with your team.
          </div>
        </div>
      </div>
      {/* How Fixfolio Works Section */}
      <section style={howSectionStyle}>
        <div style={howTitleStyle}>How Fixfolio Works</div>
        <div style={howSubtitleStyle}>Simple, intuitive, and designed for developers.</div>
        <div style={stepsRowStyle}>
          {/* Step 1 */}
          <div style={stepStyle}>
            <div style={stepNumStyle}>1</div>
            <div style={stepTitleStyle}>Capture</div>
            <div style={stepDescStyle}>
              Save code snippets, commands, and solutions as you work. Add context and tags to make them easy to find later.
            </div>
          </div>
          {/* Step 2 */}
          <div style={stepStyle}>
            <div style={stepNumStyle}>2</div>
            <div style={stepTitleStyle}>Organize</div>
            <div style={stepDescStyle}>
              Group related entries, add tags, and create collections for different projects or technologies.
            </div>
          </div>
          {/* Step 3 */}
          <div style={stepStyle}>
            <div style={stepNumStyle}>3</div>
            <div style={stepTitleStyle}>Retrieve</div>
            <div style={stepDescStyle}>
              Quickly find what you need with powerful search and filtering. Never waste time solving the same problem twice.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
} 