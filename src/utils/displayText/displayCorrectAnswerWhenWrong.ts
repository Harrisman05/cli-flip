import chalk from 'chalk';
import { Trick } from '../../model/Trick';

const displayCorrectAnswerWhenWrong = (correctTrick: Trick): void => {
  console.log(`\nThe correct answer was: ${chalk.green(`${correctTrick.name}`)}`);
};

export default displayCorrectAnswerWhenWrong;
