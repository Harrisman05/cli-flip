import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import clearAllOutput from '../cleanTerminal/clearAllOutput';
import updateQuizTricks from '../trickLogic/updateQuizTricks';
import startGif from './startGif';

export const prepareNextGif = (quizTricks: Tricks, correctTrick: Trick): void => {
  clearAllOutput();
  const updatedQuizTricks = updateQuizTricks(quizTricks, correctTrick);
  startGif(updatedQuizTricks);
};

export default prepareNextGif;
