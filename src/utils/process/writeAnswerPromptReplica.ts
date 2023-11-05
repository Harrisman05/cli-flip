import chalk from 'chalk';
import { score } from '../../model/Score';

const writeAnswerPromptReplica = (choices: string[]): void => {
  process.stdout.write(`${chalk.green('?')} ${chalk.bold('Guess the trick! 🛹🤔')} ${chalk.dim('(input blocked)')}

  ${chalk.yellow(choices[0])}
  ${chalk.yellow(choices[1])}
  ${chalk.yellow(choices[2])}
  ${chalk.yellow(choices[3])}
  
  ✅ - ${chalk.green(score.correctAnswers)} | ❌ - ${chalk.red(score.incorrectAnswers)} | ${score.currentQuestion}/${
    score.totalQuestions
  }
  `);
};

export default writeAnswerPromptReplica;
