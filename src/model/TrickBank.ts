import extractQuizTricks from '../utils/trickLogic/extractQuizTricks';
import { Trick } from './Trick';
import { Tricks } from './Tricks';

export class TrickBank {
  public trickbank: Tricks = {};

  constructor() {
    // get the quiz tricks from the master bank (some tricks in master bank are empty, so this extraction is needed)
    const quizTricks = extractQuizTricks();

    for (const [key, value] of Object.entries(quizTricks)) {
      // this loops through json object to add this class wrapper to it
      this.trickbank[key] = value;
    }
  }

  // these static methods could be utils, but wanted to try and use a static method. Also, static method links the functions to this class more closely, otherwise they are just floating util functions

  public static getRandomTrick(trickbank: Tricks): Trick {
    const randomTrick = trickbank[Object.keys(trickbank)[Math.floor(Math.random() * Object.keys(trickbank).length)]];
    return randomTrick;
  }

  public static deleteTrick(trickbank: Tricks, trick: Trick): Tricks {
    const trickbankClone = structuredClone(trickbank); // make a clone as it's better practice? Not sure if this is better or not...
    delete trickbankClone[trick.propName];
    return trickbankClone;
  }
}
