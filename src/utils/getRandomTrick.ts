// import { TrickBank } from '../model/TrickBank.js';

const getRandomTrick = (trickBank: any) => {
  // @ts-ignore
  const randomTrick = trickBank[Object.keys(trickBank)[Math.floor(Math.random() * Object.keys(trickBank).length)]];
  return randomTrick;
};

export default getRandomTrick;
