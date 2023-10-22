import readline from 'readline';

const removePromptText = (): void => {
  // Clear the "Playing gif..." text
  readline.clearLine(process.stdout, 0);
  readline.moveCursor(process.stdout, 0, 3);
};

export default removePromptText;
