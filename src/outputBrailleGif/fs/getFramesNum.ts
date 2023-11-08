import fs from 'fs';

const getFramesNum = (trickWithStancePath: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    fs.readdir(trickWithStancePath, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err.message}`);
        reject(err);
      } else {
        const fileCount = files.length;
        console.log(`Number of files in the folder: ${fileCount}`);
        resolve(fileCount);
      }
    });
  });
};

export default getFramesNum;
