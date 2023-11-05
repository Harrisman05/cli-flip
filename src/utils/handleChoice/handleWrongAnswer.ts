import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import sleep from '../sleep';
import displayWrongAscii from '../displayText/displayWrongAscii';
import updateWrongScore from '../score/updateWrongScore';
import clearScoreboard from '../cleanTerminal/clearScoreboard';
import displayCorrectAnswerWhenWrong from '../displayText/displayCorrectAnswerWhenWrong';
import prepareNextGif from '../quizControl/prepareNextGif';

const handleWrongAnswer = async (quizTricks: Tricks, correctTrick: Trick): Promise<void> => {
  displayWrongAscii();
  updateWrongScore();
  clearScoreboard();
  displayCorrectAnswerWhenWrong(correctTrick);
  await sleep(2000);
  prepareNextGif(quizTricks, correctTrick);
};

export default handleWrongAnswer;
