import { TrickBank } from '../../../src/model/TrickBank';
import * as extractQuizTricks from '../../../src/utils/trickLogic/extractQuizTricks';
import {
  MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP,
  MOCK_EXTRACTED_QUIZ_TRICKS,
  MOCK_TRICK,
  MOCK_TRICK_INTERFACE,
  MOCK_TRICKBANK,
} from '../../mocks/quizData.mock';

describe('TrickBank test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Trickbank constructor test suites', () => {
    let extractQuizTricksSpy: any;

    beforeEach(() => {
      extractQuizTricksSpy = jest.spyOn(extractQuizTricks, 'default').mockReturnValue(MOCK_EXTRACTED_QUIZ_TRICKS);
    });

    it('should call extractQuizTricks once', () => {
      new TrickBank();

      expect(extractQuizTricksSpy).toHaveBeenCalledTimes(1);
    });

    it('should assign the key value pairs of extractedQuizTricks to trickbank variable', () => {
      const newTrickbank = new TrickBank().trickbank;

      expect(newTrickbank).toEqual(MOCK_EXTRACTED_QUIZ_TRICKS);
    });
  });

  describe('getRandomTrick test suites', () => {
    it('should return a random object that matches the Trick interface', () => {
      const someRandomTrick = TrickBank.getRandomTrick(MOCK_TRICKBANK);

      expect(someRandomTrick).toEqual(expect.objectContaining(MOCK_TRICK_INTERFACE));
    });

    it('should return an object that is a value of one of the properties of the trickbank passed in', () => {
      const someRandomTrick = TrickBank.getRandomTrick(MOCK_TRICKBANK);

      const MOCK_TRICKBANK_VALUES = Object.values(MOCK_TRICKBANK);
      expect(MOCK_TRICKBANK_VALUES).toContainEqual(someRandomTrick);
    });
  });

  describe('deleteTrick test suites', () => {
    it('should return a trickbank with one less key than the orginal trickbank passed in', () => {
      const deletedTrickbank = TrickBank.deleteTrick(MOCK_TRICKBANK, MOCK_TRICK);

      const MOCK_TRICKBANK_KEYS = Object.keys(MOCK_TRICKBANK).length;
      const deletedTrickbankKeys = Object.keys(deletedTrickbank).length;

      expect(MOCK_TRICKBANK_KEYS - 1).toEqual(deletedTrickbankKeys);
    });

    it('should return a trickbank that does not contain the trick passed in for deletion', () => {
      const trickbankWithoutFakieKickflip = TrickBank.deleteTrick(MOCK_TRICKBANK, MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

      const MOCK_TRICKBANK_VALUES = Object.values(MOCK_TRICKBANK);
      const trickbankWithoutFakieKickflipValues = Object.values(trickbankWithoutFakieKickflip);

      // can't use contain because the object references need to be the same, resulting in this over complicated loose check

      // check MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP is an item in the MOCK_TRICKBANK_VALUES array
      expect(MOCK_TRICKBANK_VALUES).toEqual(
        expect.arrayContaining([expect.objectContaining(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP)]),
      );

      // check that MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP is not present in the trickbankWithoutFakieKickflipValues array
      expect(trickbankWithoutFakieKickflipValues).not.toEqual(
        expect.arrayContaining([expect.objectContaining(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP)]),
      );
    });
  });
});
