import chalk from 'chalk';

const writeStance = (stance: string): void => {
  process.stdout.write(`  ${chalk.cyan(`Skater stance: ${stance}\n`)}`);
  process.stdout.write('\n');
};

export default writeStance;
