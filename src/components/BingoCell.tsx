import React from 'react';

interface BingoCellProps {
  value: number;
  isActive: boolean;
  isWinning: boolean;
  onClick: () => void;
}

/**
 * Individual cell in the Bingo board.
 * Displays a number and toggles between active/inactive states when clicked.
 */
const BingoCell: React.FC<BingoCellProps> = ({ value, isActive, isWinning, onClick }) => {
  const cellStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    border: '2px solid #333',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: isWinning ? '#4CAF50' : isActive ? '#2196F3' : '#fff',
    color: isActive || isWinning ? '#fff' : '#333',
    userSelect: 'none',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={isHovered ? { ...cellStyle, ...hoverStyle } : cellStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {value}
    </div>
  );
};

export default BingoCell;
