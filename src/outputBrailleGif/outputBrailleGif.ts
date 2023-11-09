#!/usr/bin/env node

import getTrickWithStanceFileNames from './fs/getTrickWithStanceFilesNames';
import outputFramesSequentially from './fs/outputFramesSequentially';

const outputBrailleGif = async (): Promise<void> => {
  const trickWithStancePath = 'output/fakie-double-dolphin-flip.gif';
  const frameNames = await getTrickWithStanceFileNames(trickWithStancePath);
  outputFramesSequentially(frameNames);
};

outputBrailleGif();
