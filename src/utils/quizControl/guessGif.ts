import chalk from 'chalk';
import inquirer from 'inquirer';
import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import handleReplayGif from '../handleChoice/handleReplayGif';
import handleCorrectAnswer from '../handleChoice/handleCorrectAnswer';
import handleWrongAnswer from '../handleChoice/handleWrongAnswer';

const guessGif = async (quizTricks: Tricks, correctTrick: Trick, choices: string[]): Promise<void> => {
  const replayChoice = `${chalk.dim('REPLAY GIF')}`;
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Guess the trick! 🛹🤔',
      choices: [replayChoice, ...choices.map((choice) => chalk.yellow(choice))],
    },
  ]);

  if (answer.choice === replayChoice) {
    handleReplayGif(quizTricks, correctTrick, choices);
  } else if (answer.choice === `${chalk.yellow(correctTrick.name)}`) {
    handleCorrectAnswer(quizTricks, correctTrick);
  } else if (answer.choice !== `${chalk.yellow(correctTrick.name)}`) {
    handleWrongAnswer(quizTricks, correctTrick);
  }
};

export default guessGif;
