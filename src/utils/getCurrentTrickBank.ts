import { TrickBank } from '../model/TrickBank.js';
import masterTrickBank from '../data/masterTrickBank.js';

const getCurrentTrickBank = (trickBank: TrickBank) => {
  return Object.keys(trickBank).length ? trickBank : structuredClone(masterTrickBank);
};

export default getCurrentTrickBank;
