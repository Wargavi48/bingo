// Theme constants for easy theme switching
// To switch themes, simply import a different constant object

export const DEFAULT_THEME = {
  title: "BINGO GAME",
  resetButton: "Reset Game",
  winMessage: "🎉 BINGO! You Won! 🎉",
  instructions: "Click cells to mark them. Get 5 in a row to win!"
};

// Alternative theme example - uncomment to use
export const ALTERNATIVE_THEME = {
  title: "BINGO CHALLENGE",
  resetButton: "New Game",
  winMessage: "🏆 Congratulations! BINGO! 🏆",
  instructions: "Mark cells by clicking. Complete a line to win!"
};

// Export the active theme - change this to switch themes
export const ACTIVE_THEME = DEFAULT_THEME;
