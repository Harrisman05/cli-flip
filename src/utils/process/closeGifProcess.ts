import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import removePromptText from '../cleanTerminal/removePromptText';
import guessGif from '../quizControl/guessGif';

const closeGifProcess = (currentQuizTricks: Tricks, correctTrick: Trick, currentChoices: string[]) => {
  return async (): Promise<void> => {
    removePromptText();
    await guessGif(currentQuizTricks, correctTrick, currentChoices);
  };
};

export default closeGifProcess;
