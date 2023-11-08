import writeData from './writeData';
import fs from 'fs';

const writeGifProcess = (subfolder: string, trickGifFile: string): ((data: string) => void) => {
  if (!fs.existsSync(`output/${subfolder}/${trickGifFile}`)) {
    fs.mkdir(`output/${subfolder}`, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err.message}`);
      } else {
        console.log('Directory created successfully');
      }
    });
  }

  let frame = 1;
  const dataCallback = (data: string): void => {
    writeData(data, frame, subfolder);
    frame++;
  };

  return dataCallback;
};

export default writeGifProcess;
