import writeData from './writeData';
import fs from 'fs';

const writeGifProcess = (trickGifFile: string): ((data: string) => void) => {
  if (!fs.existsSync(`output/${trickGifFile}`)) {
    fs.mkdir(`output/${trickGifFile}`, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err.message}`);
      } else {
        console.log('Directory created successfully');
      }
    });
  }

  let frame = 1;
  const dataCallback = (data: string): void => {
    writeData(data, frame, trickGifFile);
    frame++;
  };

  return dataCallback;
};

export default writeGifProcess;
