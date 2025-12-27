import { useState } from 'react';
import Header from './components/Header';
import BingoBoard from './components/BingoBoard';
import './App.css';

/**
 * Main Bingo application component.
 * Manages the overall game state and coordinates between Header and BingoBoard.
 */
function App() {
  const [hasWon, setHasWon] = useState(false);

  const appStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <Header hasWon={hasWon} />
      <BingoBoard onWinChange={setHasWon} />
    </div>
  );
}

export default App;
