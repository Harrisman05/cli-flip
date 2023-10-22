const clearAllOutput = (): void => {
  process.stdout.write('\x1B[0J');
};

export default clearAllOutput;
