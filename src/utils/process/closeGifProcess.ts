import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import removePlayingStatusText from '../cleanTerminal/removePlayingStatusText';
import guessGif from '../quizControl/guessGif';

const closeGifProcess = (currentQuizTricks: Tricks, correctTrick: Trick, currentChoices: string[]): (() => void) => {
  const closeCallback = (): void => {
    removePlayingStatusText();
    guessGif(currentQuizTricks, correctTrick, currentChoices);
  };

  return closeCallback;
};

export default closeGifProcess;
