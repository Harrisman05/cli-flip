import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import removePlayingStatusText from '../cleanTerminal/removePlayingStatusText';
import outputBrailleGif from '../outputBrailleGif/outputBrailleGif';
import guessGif from '../quizControl/guessGif';
import readline from 'readline';

const spawnGifProcess = async (
  currentQuizTricks: Tricks,
  correctTrick: Trick,
  currentChoices: string[],
): Promise<void> => {
  // Creating this interface prevents the user from inputting early
  const rl = readline.createInterface({
    input: process.stdin,
  });

  await outputBrailleGif(correctTrick, currentChoices);
  removePlayingStatusText();
  rl.close();
  guessGif(currentQuizTricks, correctTrick, currentChoices);
};

export default spawnGifProcess;
