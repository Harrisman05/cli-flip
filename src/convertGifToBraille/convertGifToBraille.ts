#!/usr/bin/env node

import spawnGifProcess from './process/spawnGifProcess';
import util from 'util';
import fs from 'fs';

const readdirPromise = util.promisify(fs.readdir);

const getFilePaths = async (): Promise<
  {
    file: string;
  }[]
> => {
  try {
    const rootInputPath = 'input';
    const files = await readdirPromise(rootInputPath);

    const filePaths = files.map((file) => ({
      file,
    }));

    return filePaths;
  } catch (err: any) {
    console.error(`Error reading directory: ${err.message}`);
    throw err;
  }
};

export const convertGifToBraille = async (): Promise<void> => {
  const inputFiles = await getFilePaths();

  for (const inputFile of inputFiles) {
    spawnGifProcess(inputFile.file);
  }
};

/* istanbul ignore next */
if (require.main === module) {
  // To prevents test contamination, only call the main function if this script is ran directly.
  convertGifToBraille();
}
