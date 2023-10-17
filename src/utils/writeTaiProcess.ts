import chalk from 'chalk';
import { score } from '../model/Score';

const writeTaiProcess = (choices: string[], stance: string) => {
  let textLogged = false;
  return (data: string) => {
    process.stdout.write(data);
    if (!textLogged) {
      process.stdout.write(`                                           ${chalk.green('Playing gif...')}\n`);
      process.stdout.write(`  ${chalk.cyan(`Skater stance: ${stance}\n`)}`);
      process.stdout.write('\n');
      process.stdout.write(
        `${chalk.green('?')} ${chalk.bold('Guess the trick! 🛹🤔')} ${chalk.dim('(input blocked)')}\n`,
      );
      process.stdout.write('\n');
      process.stdout.write(`  ${chalk.yellow(choices[0])}\n`);
      process.stdout.write(`  ${chalk.yellow(choices[1])}\n`);
      process.stdout.write(`  ${chalk.yellow(choices[2])}\n`);
      process.stdout.write(`  ${chalk.yellow(choices[3])}\n`);
      process.stdout.write('\n');
      process.stdout.write(
        `  ✅ - ${chalk.green(score.correctAnswers)} | ❌ - ${chalk.red(score.incorrectAnswers)} | ${
          score.currentQuestion
        }/${score.totalQuestions}`,
      );
      process.stdout.write('\n');
    }
    textLogged = true;
  };
};

export default writeTaiProcess;
