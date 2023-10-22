import { Trick } from '../../model/Trick';
import generateChoices from './generateChoices';

const getCurrentChoices = (correctTrick: Trick, choices: string[]): string[] => {
  return choices.length ? choices : generateChoices(correctTrick);
};

export default getCurrentChoices;
