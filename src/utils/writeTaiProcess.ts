import chalk from 'chalk';

const writeTaiProcess = (data: string) => {
  process.stdout.write(data);
  process.stdout.write('\n');
  process.stdout.write('\n');
  process.stdout.write(chalk.bgBlue('Skater stance: ...TODO!\n'));
  process.stdout.write('\n');
  process.stdout.write(
    `${chalk.green('?')} ${chalk.bold('Guess the trick! 🛹🤔')} ${chalk.dim(
      '(input blocked)'
    )}\n`
  );
  process.stdout.write('  Kickflip\n');
  process.stdout.write('  Heelflip\n');
  process.stdout.write('  Treflip\n');
  process.stdout.write('  Lazerflip\n');
  process.stdout.write('\n');
  process.stdout.write(chalk.green('Playing gif...'));
};

export default writeTaiProcess;
