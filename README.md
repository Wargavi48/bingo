# Bingo Web Application

A fully functional Bingo game built with React and TypeScript, featuring a theme-based constants system.

## Features

- ✅ 5x5 Bingo board with clickable cells
- ✅ Visual feedback for active cells (blue highlight)
- ✅ Win detection for rows, columns, and diagonals
- ✅ Winning cells highlighted in green
- ✅ Animated win message
- ✅ Reset button to clear the board
- ✅ Theme-based constants system for easy text customization

## Theme System

All visible text is stored in the constants system, making it easy to switch themes or languages. The application includes three pre-defined themes:

### Available Themes

1. **DEFAULT_THEME** - Standard game messages
2. **FUN_THEME** - Playful, casual tone
3. **CLASSIC_THEME** - Traditional bingo style

### How to Switch Themes

Edit `src/constants/themes.ts` and change the `ACTIVE_THEME` export:

```typescript
// Use the default theme
export const ACTIVE_THEME = DEFAULT_THEME;

// Or switch to the fun theme
export const ACTIVE_THEME = FUN_THEME;

// Or use the classic theme
export const ACTIVE_THEME = CLASSIC_THEME;
```

### Creating Custom Themes

You can create your own theme by defining a new object that matches the `Theme` interface:

```typescript
export const MY_CUSTOM_THEME: Theme = {
  title: "My Custom Bingo",
  subtitle: "Your custom subtitle here",
  resetButtonLabel: "Start New Game",
  winMessage: "Victory!",
  bingoLabel: "BINGO!",
};

// Then set it as active
export const ACTIVE_THEME = MY_CUSTOM_THEME;
```

## Project Structure

```
src/
├── constants/
│   ├── themes.ts      # Theme definitions and active theme
│   └── index.ts       # Re-exports for easy importing
├── components/
│   ├── BingoBoard.tsx # Main game board component
│   ├── BingoCell.tsx  # Individual cell component
│   └── Header.tsx     # Title and win message display
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
├── App.css            # Application-specific styles
└── index.css          # Global styles
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS (no external styling libraries)

## Game Rules

1. Click on cells to mark them (they turn blue)
2. Mark 5 cells in a row (horizontally, vertically, or diagonally) to win
3. Winning cells turn green and a win message appears
4. Click "Reset Board" to start a new game
5. Click marked cells again to unmark them

