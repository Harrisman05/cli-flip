import { TrickBank } from '../model/TrickBank';

const getRandomTrick = (trickBank: TrickBank) => {
  const randomTrick =
        trickBank[
          Object.keys(trickBank)[
            Math.floor(Math.random() * Object.keys(trickBank).length)
          ]
        ];
  return randomTrick;
};

export default getRandomTrick;
