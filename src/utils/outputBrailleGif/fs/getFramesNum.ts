import fs from 'fs/promises';

const getFramesNum = async (trickWithStancePath: string): Promise<number> => {
  const files = await fs.readdir(trickWithStancePath);
  const filesCount = files.length;
  return filesCount;
};

export default getFramesNum;
