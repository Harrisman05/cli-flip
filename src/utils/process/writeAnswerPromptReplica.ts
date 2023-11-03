import chalk from 'chalk';
import { score } from '../../model/Score';

const writeAnswerPromptReplica = (choices: string[]): void => {
  process.stdout.write(
    `${chalk.green('?')} ${chalk.bold('Guess the trick! 🛹🤔')} ${chalk.dim('(input blocked)')}\n\n`,
  );
  process.stdout.write(`  ${chalk.yellow(choices[0])}\n`);
  process.stdout.write(`  ${chalk.yellow(choices[1])}\n`);
  process.stdout.write(`  ${chalk.yellow(choices[2])}\n`);
  process.stdout.write(`  ${chalk.yellow(choices[3])}\n\n`);
  process.stdout.write(
    `  ✅ - ${chalk.green(score.correctAnswers)} | ❌ - ${chalk.red(score.incorrectAnswers)} | ${
      score.currentQuestion
    }/${score.totalQuestions}\n`,
  );
};

export default writeAnswerPromptReplica;
