import { Tricks } from '../model/Tricks';
import { TrickBank } from '../model/TrickBank';

const getCurrentTrickBank = (quizTricks: Tricks) => {
  return Object.keys(quizTricks).length ? quizTricks : new TrickBank().trickbank;
};

export default getCurrentTrickBank;
