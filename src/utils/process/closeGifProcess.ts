import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import removePromptText from '../cleanTerminal/removePromptText';
import readline from 'readline';
import guessGif from '../quizControl/guessGif';

const closeGifProcess = (
  currentQuizTricks: Tricks,
  correctTrick: Trick,
  currentChoices: string[],
  rl: readline.Interface,
) => {
  return async (): Promise<void> => {
    removePromptText();
    rl.close();
    await guessGif(currentQuizTricks, correctTrick, currentChoices);
  };
};

export default closeGifProcess;
