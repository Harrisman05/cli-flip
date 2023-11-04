import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import startGif from '../quizControl/startGif';
import clearAllOutput from '../cleanTerminal/clearAllOutput';

const handleReplayGif = (quizTricks: Tricks, correctTrick: Trick, choices: string[]): void => {
  clearAllOutput();
  startGif(quizTricks, correctTrick, choices);
};

export default handleReplayGif;
