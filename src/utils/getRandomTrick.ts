import tricks from '../data/tricks';

export const getRandomTrick = () => {
  const randomTrick =
        tricks[
          Object.keys(tricks)[
            Math.floor(Math.random() * Object.keys(tricks).length)
          ]
        ];
  return randomTrick;
};
