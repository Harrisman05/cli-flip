#!/usr/bin/env node

import spawnGifProcess from './process/spawnGifProcess';
// import util from 'util';
// import fs from 'fs';
// import path from 'path';

// const readdirPromise = util.promisify(fs.readdir);

// const getFilePaths = async (): Promise<
//   {
//     file: string;
//     filePath: string;
//   }[]
// > => {
//   try {
//     const rootInputPath = '../../input';
//     const files = await readdirPromise(rootInputPath);

//     const filePaths = files.map((file) => ({
//       file,
//       filePath: path.join(rootInputPath, file),
//     }));

//     return filePaths;
//   } catch (err: any) {
//     console.error(`Error reading directory: ${err.message}`);
//     throw err;
//   }
// };

export const convertGifToBraille = (): void => {
  const trick = 'doubleDolphinFlips';
  const trickWithStanceGif = 'fakie-double-dolphin-flip.gif';

  // const inputFilepaths = await getFilePaths();
  spawnGifProcess(trick, trickWithStanceGif);

  // for (const file of inputFilepaths) {
  //   spawnGifProcess(file.file, file.filePath);
  // }
};

/* istanbul ignore next */
if (require.main === module) {
  // To prevents test contamination, only call the main function if this script is ran directly.
  convertGifToBraille();
}
