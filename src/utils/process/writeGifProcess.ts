import writePlayingStatus from './writePlayingStatus';
import writeStance from './writeStance';
import writeAnswerPromptReplica from './writeAnswerPromptReplica';
import writeData from './writeData';

const writeGifProcess = (choices: string[], stance: string): ((data: string) => void) => {
  // textWrittenOnce creates a closure with the callback, as callback can access variables in previous functions scope
  let textWrittenOnce = false;

  // defining callback here and returning it makes this more readable and testable
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
