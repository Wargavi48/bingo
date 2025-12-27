/**
 * Theme definitions for the Bingo application.
 * Switch between themes by changing the exported ACTIVE_THEME.
 */

export interface Theme {
  title: string;
  subtitle: string;
  resetButtonLabel: string;
  winMessage: string;
  bingoLabel: string;
}

export const DEFAULT_THEME: Theme = {
  title: "Bingo Game",
  subtitle: "Click cells to mark them. Get 5 in a row to win!",
  resetButtonLabel: "Reset Board",
  winMessage: "🎉 You Win! 🎉",
  bingoLabel: "BINGO!",
};

export const FUN_THEME: Theme = {
  title: "Super Fun Bingo!",
  subtitle: "Tap the squares and make a line!",
  resetButtonLabel: "Start Over",
  winMessage: "🌟 Amazing! You got BINGO! 🌟",
  bingoLabel: "B-I-N-G-O!",
};

export const CLASSIC_THEME: Theme = {
  title: "Classic Bingo",
  subtitle: "Mark five in a row, column, or diagonal",
  resetButtonLabel: "New Game",
  winMessage: "Congratulations! Bingo!",
  bingoLabel: "BINGO",
};

// Switch theme by changing which theme is exported as ACTIVE_THEME
export const ACTIVE_THEME = DEFAULT_THEME;
