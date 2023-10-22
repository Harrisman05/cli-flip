import { Trick } from '../model/Trick';
import { TrickBank } from '../model/TrickBank';

const generateChoices = (correctTrick: Trick) => {
  let choicesTricks = new TrickBank().trickbank;

  const blankChoices = ['_', '_', '_', '_'];
  const choices = blankChoices
    .map((_, i) => {
      if (i === 0) {
        choicesTricks = TrickBank.deleteTrick(choicesTricks, correctTrick); // remove correct trick from randomisation then add it as first choice
        return correctTrick.name;
      }

      const randomTrick = TrickBank.getRandomTrick(choicesTricks); // generate a random trick from the new trickbank created
      choicesTricks = TrickBank.deleteTrick(choicesTricks, randomTrick);
      return randomTrick.name;
    })
    .sort(() => Math.random() - 0.5); // randomly shuffle the choice array

  return choices;
};

export default generateChoices;
