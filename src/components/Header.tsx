import React from 'react';
import { ACTIVE_THEME } from '../constants';

interface HeaderProps {
  hasWon: boolean;
}

/**
 * Header component displaying the title, subtitle, and win message.
 * All text comes from the ACTIVE_THEME constant.
 */
const Header: React.FC<HeaderProps> = ({ hasWon }) => {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 10px 0',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#666',
    margin: '0 0 20px 0',
  };

  const winMessageStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4CAF50',
    margin: '20px 0',
    animation: 'pulse 1s infinite',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{ACTIVE_THEME.title}</h1>
      <p style={subtitleStyle}>{ACTIVE_THEME.subtitle}</p>
      {hasWon && <div style={winMessageStyle}>{ACTIVE_THEME.winMessage}</div>}
    </header>
  );
};

export default Header;
