import fs from 'fs/promises';
import { getAssets } from './getAssets';

export const checkAssets = async (): Promise<void> => {
  try {
    await fs.access('github-export');
    console.log('Assets already downloaded!');
  } catch (error) {
    await fs.mkdir('github-export');
    await getAssets();
  }
};
