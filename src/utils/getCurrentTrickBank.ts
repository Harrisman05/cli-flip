import { TrickBank } from '../model/TrickBank';
import masterTrickBank from '../data/masterTrickBank';

const getCurrentTrickBank = (trickBank: TrickBank) => {
  return Object.keys(trickBank).length
    ? trickBank
    : structuredClone(masterTrickBank);
};

export default getCurrentTrickBank;
