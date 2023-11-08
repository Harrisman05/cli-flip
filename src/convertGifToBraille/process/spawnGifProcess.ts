import { spawn } from 'child_process';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from '../../config/constants';
import getProcessArgs from './getProcessArgs';
import readline from 'readline';
import writeGifProcess from './writeGifProcess';

const spawnGifProcess = (trick: string, trickWithStanceGif: string): void => {
  const trickFilepath = `assets/masterTrickStore/${trick}/${trickWithStanceGif}`;

  readline.createInterface({
    input: process.stdin,
  });

  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...getProcessArgs(), trickFilepath]);

  taiProcess.stdout.on('data', writeGifProcess(trick, trickWithStanceGif)); // horrible, but this gets an extra parameters into the writeTaiProcess callback

  taiProcess.stdout.on('close', () => {
    console.log('All files have been processed.');
    process.exit();
  });

  // close stream, remove the prompt text and close rl interface
};

export default spawnGifProcess;
