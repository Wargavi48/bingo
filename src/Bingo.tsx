import { useState } from 'react';
import React from 'react';
import { ACTIVE_THEME } from './constants';
import './Bingo.css';

interface BingoProps {
  items?: string[];
}

interface Cell {
  text: string;
  marked: boolean;
}

const Bingo: React.FC<BingoProps> = ({ items = [] }) => {
  const BOARD_SIZE = 5;

  const shuffle = <T,>(arr: T[]): T[] => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const getShuffledTexts = (): string[] => {
    const needed = BOARD_SIZE * BOARD_SIZE;
    const centerIndex = Math.floor(needed / 2);

    // If no items provided, return blanks except center "FREE"
    if (items.length === 0) {
      const blanks = Array(needed).fill('');
      blanks[centerIndex] = 'FREE';
      return blanks;
    }

    // Exclude any explicit "free" entries from the pool to avoid duplicates
    const pool = shuffle(items.slice().filter(s => s.toLowerCase() !== 'free'));
    const out: string[] = [];

    // Fill the list (excluding center) by cycling the pool as needed
    let i = 0;
    for (let idx = 0; idx < needed; idx++) {
      if (idx === centerIndex) {
        out[idx] = 'FREE';
        continue;
      }
      if (pool.length === 0) {
        out[idx] = '';
      } else {
        out[idx] = pool[i % pool.length];
        i++;
      }
    }

    // Shuffle positions except keep center fixed
    const others = out.filter((_, idx) => idx !== centerIndex);
    const shuffledOthers = shuffle(others);
    const final: string[] = [];
    let j = 0;
    for (let idx = 0; idx < needed; idx++) {
      if (idx === centerIndex) {
        final[idx] = 'FREE';
      } else {
        final[idx] = shuffledOthers[j++];
      }
    }

    return final;
  };

  const [cells, setCells] = useState<Cell[][]>(() => {
    const texts = getShuffledTexts();
    let idx = 0;
    return Array(BOARD_SIZE)
      .fill(null)
      .map(() =>
        Array(BOARD_SIZE)
          .fill(null)
          .map(() => ({ text: texts[idx++], marked: false }))
      );
  });

  const [hasWon, setHasWon] = useState(false);

  // Toggle cell on click
  const handleCellClick = (row: number, col: number): void => {
    if (hasWon) return; // Don't allow clicks after winning

    const newCells = cells.map((r, rowIndex) =>
      r.map((cell: Cell, colIndex: number) =>
        rowIndex === row && colIndex === col
          ? { ...cell, marked: !cell.marked }
          : cell
      )
    );
    setCells(newCells);
    checkWin(newCells);
  };

  // Check for win condition (rows, columns, diagonals)
  const checkWin = (currentCells: Cell[][]): void => {
    // Check rows
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (currentCells[i].every((cell: Cell) => cell.marked)) {
        setHasWon(true);
        return;
      }
    }

    // Check columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (currentCells.every((row: Cell[]) => row[col].marked)) {
        setHasWon(true);
        return;
      }
    }

    // Check diagonal (top-left to bottom-right)
    let diag1 = true;
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (!currentCells[i][i].marked) {
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
      if (!currentCells[i][BOARD_SIZE - 1 - i].marked) {
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
    const texts = getShuffledTexts();
    let idx = 0;
    setCells(
      Array(BOARD_SIZE)
        .fill(null)
        .map(() =>
          Array(BOARD_SIZE)
            .fill(null)
            .map(() => ({ text: texts[idx++], marked: false }))
        )
    );
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
        {cells.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${cell.marked ? 'marked' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                <div className="cell-text">{cell.text}</div>
                {cell.marked && <div className="cell-check">✓</div>}
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
