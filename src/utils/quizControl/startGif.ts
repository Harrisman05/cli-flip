import { Trick } from '../../model/Trick';
import { Tricks } from '../../model/Tricks';
import generateTricks from '../trickLogic/generateTricks';
import spawnGifProcess from '../process/spawnGifProcess';

export const startGif = (
  quizTricks: Tricks = {} as Tricks,
  trick: Trick = {} as Trick,
  choices: string[] = [] as string[],
): void => {
  // use type assertion to allow empty object to pass for first call

  const [currentQuizTricks, correctTrick, currentChoices] = generateTricks(quizTricks, trick, choices);

  spawnGifProcess(currentQuizTricks, correctTrick, currentChoices);
};

export default startGif;
