import chalk from 'chalk';

const writePlayingStatus = (): void => {
  process.stdout.write(`                                     ${chalk.green('Playing gif...')}\n`);
};

export default writePlayingStatus;
