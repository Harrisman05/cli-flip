import { Trick } from '../model/Trick.js';
import generateChoices from './generateChoices.js';

const getCurrentChoices = (correctTrick: Trick, choices: string[]) => {
  return choices.length ? choices : generateChoices(correctTrick);
};

export default getCurrentChoices;
