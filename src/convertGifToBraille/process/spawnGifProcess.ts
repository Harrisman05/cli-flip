import { spawn } from 'child_process';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from '../../config/constants';
import getProcessArgs from './getProcessArgs';
import readline from 'readline';
import writeGifProcess from './writeGifProcess';

const spawnGifProcess = (trickWithStanceGif: string): void => {
  const inputGifFilepath = `input/${trickWithStanceGif}`;

  readline.createInterface({
    input: process.stdin,
  });

  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...getProcessArgs(), inputGifFilepath]);

  taiProcess.stdout.on('data', writeGifProcess(trickWithStanceGif)); // horrible, but this gets an extra parameters into the writeTaiProcess callback

  taiProcess.stdout.on('close', () => {
    console.log('All files have been processed.');
  });
};

export default spawnGifProcess;
