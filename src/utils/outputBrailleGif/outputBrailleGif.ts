#!/usr/bin/env node

import { Trick } from '../../model/Trick';
import getTrickFrameNames from './fs/getTrickFrameNames';
import outputFramesSequentially from './fs/outputFramesSequentially';

const outputBrailleGif = async (correctTrick: Trick, currentChoices: string[]): Promise<void> => {
  const trickFramesPath = `output/${correctTrick.filepath}`;
  const frameNames = await getTrickFrameNames(trickFramesPath);
  await outputFramesSequentially(frameNames, currentChoices, correctTrick.stance);
};

export default outputBrailleGif;
