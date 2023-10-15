import { Trick } from '../model/Trick';
import { TrickBank } from '../model/TrickBank';
import getRandomTrick from './getRandomTrick';

const getCorrectTrick = (currentTrickBank: TrickBank, trick: Trick) => {
  return Object.keys(trick).length ? trick : getRandomTrick(currentTrickBank);
};

export default getCorrectTrick;
