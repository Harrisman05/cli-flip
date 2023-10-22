import readline from 'readline';

const clearScoreboard = (): void => {
  readline.moveCursor(process.stdout, 0, -2);
  readline.clearLine(process.stdout, 0);
};

export default clearScoreboard;
