import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import sleep from '../sleep';
import displayCorrectAscii from '../displayText/displayCorrectAscii';
import updateCorrectScore from '../score/updateCorrectScore';
import clearScoreboard from '../cleanTerminal/clearScoreboard';
import prepareNextGif from '../quizControl/prepareNextGif';

const handleCorrectAnswer = async (quizTricks: Tricks, correctTrick: Trick): Promise<void> => {
  displayCorrectAscii();
  updateCorrectScore();
  clearScoreboard();
  await sleep(2000);
  prepareNextGif(quizTricks, correctTrick);
};

export default handleCorrectAnswer;
