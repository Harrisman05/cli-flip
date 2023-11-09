import fs from 'node:fs';

const writeData = (data: string, frame: number, trickGifFile: string): void => {
  process.stdout.write(data);

  const frameFilename = `output/${trickGifFile}/${trickGifFile}_frame-${frame}.txt`;

  fs.writeFileSync(frameFilename, data, 'utf8');

  console.log(`Data written to ${frameFilename}`);
};

export default writeData;
