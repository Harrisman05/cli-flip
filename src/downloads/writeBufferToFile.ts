import fs from 'fs/promises';

export const writeBufferToFile = async (arrayBuffer: Buffer): Promise<void> => {
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile('github-export/attempt.zip', buffer);
};
