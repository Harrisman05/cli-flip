import readline from 'readline';

const removePlayingStatusText = (): void => {
  // Clear the "Playing gif..." text and move cursor to correct position to create answer prompt
  readline.clearLine(process.stdout, 0);
  readline.moveCursor(process.stdout, 0, 3);
};

export default removePlayingStatusText;
