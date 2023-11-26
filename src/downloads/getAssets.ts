import { getArrayBuffer } from './getArrayBuffer';
import { writeBufferToFile } from './writeBufferToFile';
import { extractZipFile } from './extractZipFile';

export const getAssets = async (): Promise<any> => {
  console.log('Downloading assets...');

  // get ArrayBuffer from Github API releases assets
  const arrayBuffer = await getArrayBuffer();

  // write the arrayBuffer to file (a zip file)
  await writeBufferToFile(arrayBuffer as Buffer);

  // extract the contents of the zip file
  extractZipFile();

  console.log('Assets downloaded!');
};
