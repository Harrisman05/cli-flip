import { Tricks } from '../../model/Tricks';
import { TrickBank } from '../../model/TrickBank';
import { Trick } from '../../model/Trick';

const updateQuizTricks = (quizTricks: Tricks, correctTrick: Trick): Tricks => {
  return TrickBank.deleteTrick(quizTricks, correctTrick); // delete the just answered trick name to remove it from next possible set of correct tricks, preventing question duplication
};

export default updateQuizTricks;
