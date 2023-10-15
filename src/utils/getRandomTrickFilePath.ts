import { tricksFilePaths } from '../data/tricksFilePaths';

export const getRandomTrickFilePath = () => {
  const randomTrick =
        tricksFilePaths[
          Object.keys(tricksFilePaths)[
            Math.floor(Math.random() * Object.keys(tricksFilePaths).length)
          ]
        ];
  return randomTrick;
};
