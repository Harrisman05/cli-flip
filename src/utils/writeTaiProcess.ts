import chalk from 'chalk';

const writeTaiProcess = (choices: string[]) => {
  return (data: string) => {
    process.stdout.write(data);
    process.stdout.write('\n');
    process.stdout.write('\n');
    process.stdout.write(chalk.bgBlue('Skater stance: ...TODO!\n'));
    process.stdout.write('\n');
    process.stdout.write(
      `${chalk.green('?')} ${chalk.bold(
        'Guess the trick! 🛹🤔'
      )} ${chalk.dim('(input blocked)')}\n`
    );
    process.stdout.write(`  ${choices[0]}\n`);
    process.stdout.write(`  ${choices[1]}\n`);
    process.stdout.write(`  ${choices[2]}\n`);
    process.stdout.write(`  ${choices[3]}\n`);
    process.stdout.write('\n');
    process.stdout.write(chalk.green('Playing gif...'));
  };
};

export default writeTaiProcess;
