import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import getCorrectTrick from './getCorrectTrick';
import getCurrentChoices from './getCurrentChoices';
import getCurrentTrickBank from './getCurrentTrickBank';

const generateTricks = (quizTricks: Tricks, trick: Trick, choices: string[]): [Tricks, Trick, string[]] => {
  const currentQuizTricks = getCurrentTrickBank(quizTricks);
  const correctTrick = getCorrectTrick(currentQuizTricks, trick);
  const currentChoices = getCurrentChoices(correctTrick, choices);
  return [currentQuizTricks, correctTrick, currentChoices];
};

export default generateTricks;
