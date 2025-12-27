import React, { useState, useEffect } from 'react';
import BingoCell from './BingoCell';
import { ACTIVE_THEME } from '../constants';

interface BingoBoardProps {
  onWinChange: (hasWon: boolean) => void;
}

/**
 * Main Bingo board component.
 * Manages a 5x5 grid of cells, tracks active cells, and detects winning conditions.
 */
const BingoBoard: React.FC<BingoBoardProps> = ({ onWinChange }) => {
  const BOARD_SIZE = 5;

  // Initialize board with numbers 1-25
  const initializeBoard = (): number[] => {
    return Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) => i + 1);
  };

  const [board] = useState<number[]>(initializeBoard());
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());
  const [winningIndices, setWinningIndices] = useState<Set<number>>(new Set());

  /**
   * Check if there's a winning combination (row, column, or diagonal).
   */
  const checkWin = (active: Set<number>): Set<number> => {
    const size = BOARD_SIZE;

    // Check rows
    for (let row = 0; row < size; row++) {
      const rowIndices = Array.from({ length: size }, (_, col) => row * size + col);
      if (rowIndices.every(idx => active.has(idx))) {
        return new Set(rowIndices);
      }
    }

    // Check columns
    for (let col = 0; col < size; col++) {
      const colIndices = Array.from({ length: size }, (_, row) => row * size + col);
      if (colIndices.every(idx => active.has(idx))) {
        return new Set(colIndices);
      }
    }

    // Check diagonal (top-left to bottom-right)
    const diag1Indices = Array.from({ length: size }, (_, i) => i * size + i);
    if (diag1Indices.every(idx => active.has(idx))) {
      return new Set(diag1Indices);
    }

    // Check diagonal (top-right to bottom-left)
    const diag2Indices = Array.from({ length: size }, (_, i) => i * size + (size - 1 - i));
    if (diag2Indices.every(idx => active.has(idx))) {
      return new Set(diag2Indices);
    }

    return new Set();
  };

  /**
   * Toggle a cell's active state.
   */
  const handleCellClick = (index: number) => {
    setActiveIndices(prev => {
      const newActive = new Set(prev);
      if (newActive.has(index)) {
        newActive.delete(index);
      } else {
        newActive.add(index);
      }
      return newActive;
    });
  };

  /**
   * Reset the board to initial state.
   */
  const handleReset = () => {
    setActiveIndices(new Set());
    setWinningIndices(new Set());
    onWinChange(false);
  };

  // Check for winning condition whenever active indices change
  useEffect(() => {
    const winning = checkWin(activeIndices);
    setWinningIndices(winning);
    onWinChange(winning.size > 0);
  }, [activeIndices, onWinChange]);

  const boardStyle: React.CSSProperties = {
    display: 'inline-block',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${BOARD_SIZE}, 80px)`,
    gap: '8px',
    marginBottom: '20px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#FF5722',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={boardStyle}>
      <div style={gridStyle}>
        {board.map((value, index) => (
          <BingoCell
            key={index}
            value={value}
            isActive={activeIndices.has(index)}
            isWinning={winningIndices.has(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button
        style={buttonStyle}
        onClick={handleReset}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {ACTIVE_THEME.resetButtonLabel}
      </button>
    </div>
  );
};

export default BingoBoard;
