import chalk from 'chalk';
import inquirer from 'inquirer';
import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import handleReplayGif from '../handleAnswers/handleReplayGif';
import handleCorrectAnswer from '../handleAnswers/handleCorrectAnswer';
import handleWrongAnswer from '../handleAnswers/handleWrongAnswer';

const guessGif = async (quizTricks: Tricks, correctTrick: Trick, choices: string[]): Promise<void> => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'trick',
      message: 'Guess the trick! 🛹🤔',
      choices: [`${chalk.dim('REPLAY GIF')}`, ...choices.map((choice) => chalk.yellow(choice))],
    },
  ]);

  if (answer.trick === `${chalk.dim('REPLAY GIF')}`) {
    handleReplayGif(quizTricks, correctTrick, choices);
  } else if (answer.trick === `${chalk.yellow(`${correctTrick.name}`)}`) {
    handleCorrectAnswer(quizTricks, correctTrick);
  } else if (answer.trick !== `${chalk.yellow(`${correctTrick.name}`)}`) {
    handleWrongAnswer(quizTricks, correctTrick);
  }
};

export default guessGif;
