import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import sleep from '../sleep';
import displayCorrectTrickAscii from '../displayText/displayCorrectTrickAscii';
import updateCorrectScore from '../score/updateCorrectScore';
import clearScoreboard from '../cleanTerminal/clearScoreboard';
import prepareNextGif from '../quizControl/prepareNextGif';

const handleCorrectAnswer = async (quizTricks: Tricks, correctTrick: Trick): Promise<void> => {
  displayCorrectTrickAscii();
  updateCorrectScore();
  clearScoreboard();
  await sleep(2000);
  prepareNextGif(quizTricks, correctTrick);
};

export default handleCorrectAnswer;
