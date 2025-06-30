import React, { useState } from 'react';

export default function JumpButton({ style = {}, children, ...props }) {
  const [hover, setHover] = useState(false);

  const jumpStyle = {
    transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s',
    transform: hover ? 'translateY(-7px) scale(1.08)' : 'none',
    boxShadow: hover ? '0 6px 18px rgba(124,58,237,0.13)' : 'none',
    ...style,
  };

  return (
    <button
      {...props}
      style={jumpStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
} 