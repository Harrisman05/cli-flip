import { spawn } from 'child_process';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from '../../config/constants';
import getProcessArgs from './getProcessArgs';
import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import readline from 'readline';
import writeTaiProcess from './writeGifProcess';
import removePromptText from '../cleanTerminal/removePromptText';
import guessGif from '../quizControl/guessGif';

const spawnGifProcess = (currentQuizTricks: Tricks, correctTrick: Trick, currentChoices: string[]): void => {
  // Creating this interface prevents the user from inputting early
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...getProcessArgs(), correctTrick.filepath]);

  taiProcess.stdout.on('data', writeTaiProcess(currentChoices, correctTrick.stance)); // horrible, but this gets an extra parameters into the writeTaiProcess callback

  // close stream, remove the prompt text and close rl interface
  taiProcess.on('close', async () => {
    removePromptText();
    rl.close();
    await guessGif(currentQuizTricks, correctTrick, currentChoices);
  });
};

export default spawnGifProcess;
