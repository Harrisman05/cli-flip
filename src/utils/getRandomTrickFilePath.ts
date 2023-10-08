import { tricksFilePaths } from '../data/tricksFilePaths.js';

export const getRandomTrickFilePath = () => {
  const randomTrick =
        tricksFilePaths[
          Object.keys(tricksFilePaths)[
            Math.floor(Math.random() * Object.keys(tricksFilePaths).length)
          ]
        ];
  return randomTrick;
};
