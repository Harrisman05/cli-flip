import fs from 'fs';
import sleep from '../utils/sleep';

const outputFramesSequentially = (frameNames: string[]): void => {
  if (frameNames.length === 0) {
    console.log('All files have been processed.');
    return;
  }

  // .shift() can return undefined, but base case terminates recursion when array is empty so .shift() will never return undefined
  const currentFrame = frameNames.shift() as string;

  fs.readFile(currentFrame, 'utf8', async (err, data) => {
    if (err) {
      console.error(`Error reading ${currentFrame}: ${err.message}`);
    } else {
      process.stdout.write(data);
      process.stdout.write('\x1B[0J');
      await sleep(65);
    }

    outputFramesSequentially(frameNames);
  });
};

export default outputFramesSequentially;
