import fs from 'fs/promises';
import sleep from '../../sleep';
import writeAnswerPromptReplica from '../../process/writeAnswerPromptReplica';
import writePlayingStatus from '../../process/writePlayingStatus';
import writeStance from '../../process/writeStance';

const outputFramesSequentially = async (
  frameNames: string[],
  choices: string[],
  stance: string,
  textWrittenOnce: boolean = false,
): Promise<void> => {
  if (frameNames.length === 0) {
    return;
  }

  const currentFrame = frameNames.shift() as string;

  try {
    const data = await fs.readFile(currentFrame, 'utf8');
    process.stdout.write(data);

    if (!textWrittenOnce) {
      process.stdout.write('\x1B[0J');
      writePlayingStatus();
      writeStance(stance);
      writeAnswerPromptReplica(choices);
    }

    await sleep(65);
  } catch (err) {
    console.error(`Error reading ${currentFrame}: ${err}`);
  }

  await outputFramesSequentially(frameNames, choices, stance, true);
};

export default outputFramesSequentially;
