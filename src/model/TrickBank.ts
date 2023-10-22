import allTricks from '../data/allTricks';
import { Trick } from './Trick';
import { Tricks } from './Tricks';

export class TrickBank {
  public trickbank: Tricks = {};

  constructor() {
    for (const [key, value] of Object.entries(allTricks)) {
      // this loops through json object to add this class wrapper to it
      this.trickbank[key] = value;
    }
  }

  public static getRandomTrick(trickbank: Tricks): Trick {
    const randomTrick = trickbank[Object.keys(trickbank)[Math.floor(Math.random() * Object.keys(trickbank).length)]];
    return randomTrick;
  }

  public static deleteTrick(trickbank: Tricks, trick: Trick): Tricks {
    const trickbankClone = structuredClone(trickbank);
    delete trickbankClone[trick.propName];
    return trickbankClone;
  }
}
