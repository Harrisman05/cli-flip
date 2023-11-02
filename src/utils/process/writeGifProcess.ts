import writePlayingStatus from './writePlayingStatus';
import writeStance from './writeStance';
import writeAnswerPromptReplica from './writeAnswerPromptReplica';
import writeData from './writeData';

const writeGifProcess = (choices: string[], stance: string): ((data: string) => void) => {
  let textWrittenOnce = false;

  // defining callback here and returning it makes this more testable
  const dataCallback = (data: string): void => {
    writeData(data);
    if (!textWrittenOnce) {
      writePlayingStatus();
      writeStance(stance);
      writeAnswerPromptReplica(choices);
    }
    textWrittenOnce = true;
  };

  return dataCallback;
};

export default writeGifProcess;
