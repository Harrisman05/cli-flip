import chalk from 'chalk';

const writeStance = (stance: string): void => {
  process.stdout.write(`  ${chalk.cyan(`Skater stance: ${stance}\n\n`)}`);
};

export default writeStance;
