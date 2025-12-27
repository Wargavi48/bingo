import React, { useState } from 'react';
import { ACTIVE_THEME } from './constants';
import './Bingo.css';

const Bingo = () => {
  const BOARD_SIZE = 5;
  
  // Initialize a 5x5 board with all cells set to false (not marked)
  const [board, setBoard] = useState(() => 
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(false))
  );
  const [hasWon, setHasWon] = useState(false);

  // Toggle cell on click
  const handleCellClick = (row, col) => {
    if (hasWon) return; // Don't allow clicks after winning
    
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? !cell : cell
      )
    );
    setBoard(newBoard);
    checkWin(newBoard);
  };

  // Check for win condition (rows, columns, diagonals)
  const checkWin = (currentBoard) => {
    // Check rows
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (currentBoard[i].every(cell => cell === true)) {
        setHasWon(true);
        return;
      }
    }

    // Check columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (currentBoard.every(row => row[col] === true)) {
        setHasWon(true);
        return;
      }
    }

    // Check diagonal (top-left to bottom-right)
    let diag1 = true;
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (!currentBoard[i][i]) {
        diag1 = false;
        break;
      }
    }
    if (diag1) {
      setHasWon(true);
      return;
    }

    // Check diagonal (top-right to bottom-left)
    let diag2 = true;
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (!currentBoard[i][BOARD_SIZE - 1 - i]) {
        diag2 = false;
        break;
      }
    }
    if (diag2) {
      setHasWon(true);
      return;
    }
  };

  // Reset the game
  const handleReset = () => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(false)));
    setHasWon(false);
  };

  return (
    <div className="bingo-container">
      <h1 className="title">{ACTIVE_THEME.title}</h1>
      <p className="instructions">{ACTIVE_THEME.instructions}</p>
      
      {hasWon && (
        <div className="win-message">
          {ACTIVE_THEME.winMessage}
        </div>
      )}
      
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${cell ? 'marked' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell && '✓'}
              </button>
            ))}
          </div>
        ))}
      </div>
      
      <button className="reset-button" onClick={handleReset}>
        {ACTIVE_THEME.resetButton}
      </button>
    </div>
  );
};

export default Bingo;
