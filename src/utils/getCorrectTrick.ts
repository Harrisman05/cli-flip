import { Trick } from '../model/Trick';
import { Tricks } from '../model/Tricks';
import { TrickBank } from '../model/TrickBank';

const getCorrectTrick = (quizTricks: Tricks, trick: Trick) => {
  return Object.keys(trick).length ? trick : TrickBank.getRandomTrick(quizTricks);
};

export default getCorrectTrick;
