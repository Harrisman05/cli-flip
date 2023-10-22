import masterTrickStore from '../../data/masterTrickStore';
import { Tricks } from '../../model/Tricks';

const extractQuizTricks = (): Tricks => {
  const quizTricks: Tricks = {};

  for (let i = 0; i < Object.keys(masterTrickStore).length; i++) {
    // iterate through the trick families as all trick families have at least one trick
    const trickFamily = masterTrickStore[Object.keys(masterTrickStore)[i]] as Tricks; // this allows empty object to be Tricks type, but the if check at the end filters these out. Cleanest solution without going thru type gymnastics...

    // extract trick with stance from trick family
    for (let j = 0; j < Object.keys(trickFamily).length; j++) {
      const trickWithStance = trickFamily[Object.keys(trickFamily)[j]];

      // if trick with stance has any data in it
      if (Object.keys(trickWithStance).length) {
        quizTricks[Object.keys(trickFamily)[j]] = trickWithStance;
      }
    }
  }
  return quizTricks;
};

export default extractQuizTricks;
