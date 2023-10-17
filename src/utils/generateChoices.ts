import { Trick } from '../model/Trick.js';
import masterTrickBank from '../data/masterTrickBank.js';
import getRandomTrick from './getRandomTrick.js';

const generateChoices = (correctTrick: Trick) => {
  const randomTrickBank = structuredClone(masterTrickBank); // clone the master trickBank as this function directly mutates the object :( Want availablity to all tricks in the choice array so have to use master trickbank

  const blankChoices = ['_', '_', '_', '_'];
  const choices = blankChoices
    .map((_, i) => {
      if (i === 0) {
        delete randomTrickBank[correctTrick.propName]; // delete correct trick to remove it from randomiser
        return correctTrick.name;
      }

      const { name, propName } = getRandomTrick(randomTrickBank);
      delete randomTrickBank[propName];
      return name;
    })
    .sort(() => Math.random() - 0.5);

  return choices;
};

export default generateChoices;
