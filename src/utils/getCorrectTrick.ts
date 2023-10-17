import { Trick } from '../model/Trick.js';
import { TrickBank } from '../model/TrickBank.js';
import getRandomTrick from './getRandomTrick.js';

const getCorrectTrick = (currentTrickBank: TrickBank, trick: Trick) => {
  return Object.keys(trick).length ? trick : getRandomTrick(currentTrickBank);
};

export default getCorrectTrick;
