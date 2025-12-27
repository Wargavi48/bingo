# Bingo Game

A fully functional Bingo web application built with React using functional components and hooks.

## Features

- ✅ **5x5 Bingo Board**: Interactive grid with clickable cells
- ✅ **Cell Toggle**: Click to mark/unmark cells
- ✅ **Win Detection**: Automatically detects winning patterns:
  - Horizontal rows
  - Vertical columns
  - Both diagonals
- ✅ **Win Message**: Displays celebration message from constants
- ✅ **Reset Button**: Clear the board and start a new game
- ✅ **Theme Support**: Easy theme switching via constants file
- ✅ **Clean Code**: No hardcoded text in components
- ✅ **Responsive Design**: Clean and simple styling

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

## Theme Switching

All UI text is stored in `src/constants.js`. To switch themes:

1. Open `src/constants.js`
2. Change the `ACTIVE_THEME` export to use a different theme:

```javascript
// Default theme
export const ACTIVE_THEME = DEFAULT_THEME;

// Or use alternative theme
export const ACTIVE_THEME = ALTERNATIVE_THEME;
```

You can also create your own custom theme by defining a new constant with the same structure:

```javascript
export const MY_THEME = {
  title: "Your Title",
  resetButton: "Your Button Text",
  winMessage: "Your Win Message",
  instructions: "Your Instructions"
};

export const ACTIVE_THEME = MY_THEME;
```

## Project Structure

```
bingo/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── constants.js        # Theme constants (all UI text)
│   ├── Bingo.js           # Main Bingo game component
│   ├── Bingo.css          # Bingo component styles
│   ├── App.js             # Root app component
│   ├── App.css            # App styles
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
└── package.json           # Dependencies and scripts
```

## How to Play

1. Click on any cell in the 5x5 grid to mark it (a checkmark will appear)
2. Click again to unmark a cell
3. Get 5 marked cells in a row (horizontally, vertically, or diagonally) to win
4. When you win, a celebration message will appear
5. Click "Reset Game" to clear the board and play again

## Technologies Used

- React 18.2.0
- React Hooks (useState)
- Functional Components
- CSS3 with animations