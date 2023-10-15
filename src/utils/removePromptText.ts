import readline from 'readline';

const removePromptText = () => {
  for (let i = 0; i < 8; i++) {
    readline.clearLine(process.stdout, 0); // Clear the line
    readline.moveCursor(process.stdout, 0, -1); // Move cursor up one line
  }
  console.log('\n'); // newline to prompt inquirer properly
};

export default removePromptText;
