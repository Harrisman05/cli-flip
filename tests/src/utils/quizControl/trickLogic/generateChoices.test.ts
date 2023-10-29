import {
  MOCK_RANDOM_TRICK_AS_HEELFLIP,
  MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP,
  MOCK_TRICKBANK,
} from '../../../../mocks/quizData.mock';
import generateChoices from '../../../../../src/utils/trickLogic/generateChoices';
import { Tricks } from '../../../../../src/model/Tricks';
import { TrickBank } from '../../../../../src/model/TrickBank';
import { Trick } from '../../../../../src/model/Trick';

jest.mock('../../../../../src/model/TrickBank', () => {
  return {
    TrickBank: class MockTrickBank {
      private _trickbank: Tricks;

      constructor() {
        this._trickbank = MOCK_TRICKBANK;
      }

      get trickbank(): Tricks {
        return this._trickbank;
      }

      public static getRandomTrick(): Trick {
        // force this to always return heelflip mock for easier testing assertations
        return MOCK_RANDOM_TRICK_AS_HEELFLIP;
      }

      public static deleteTrick(trickbank: Tricks, trick: Trick): Tricks {
        const trickbankClone = structuredClone(trickbank);
        delete trickbankClone[trick.propName];
        return trickbankClone;
      }
    },
  };
});

describe('generateChoices test suites', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should create a new trickbank', () => {
    // https://stackoverflow.com/questions/43697455/how-to-mock-replace-getter-function-of-object-with-jest/49455429#49455429
    const trickbankSpy = jest.spyOn(TrickBank.prototype, 'trickbank', 'get');

    generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    expect(trickbankSpy).toHaveBeenCalledTimes(1);
    expect(trickbankSpy).toHaveReturnedWith(MOCK_TRICKBANK);
  });

  it('should call the deleteTrick method for the correct trick exactly once', () => {
    const deleteTrickSpy = jest.spyOn(TrickBank, 'deleteTrick');

    generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    // quite complicated but filters out params which contain Fakie Kickflip. Overall, deleteTrick is called 4 times.
    expect(deleteTrickSpy).toHaveBeenCalledTimes(4);

    const timesDeleteTrickCalledWithCorrectTrick = deleteTrickSpy.mock.calls.flatMap((arr) =>
      arr.filter((param) => param.name === MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP.name),
    ).length;
    expect(timesDeleteTrickCalledWithCorrectTrick).toEqual(1);
  });

  it('should call the deleteTrick method with the random trick exactly 3 times', () => {
    const deleteTrickSpy = jest.spyOn(TrickBank, 'deleteTrick');

    generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    expect(deleteTrickSpy).toHaveBeenCalledTimes(4);

    const timesDeleteTrickCalledWithRandomTrick = deleteTrickSpy.mock.calls.flatMap((arr) =>
      arr.filter((param) => param.name === MOCK_RANDOM_TRICK_AS_HEELFLIP.name),
    ).length;

    expect(timesDeleteTrickCalledWithRandomTrick).toEqual(3);
  });

  it('should call the getRandomTrick method exactly 3 times', () => {
    const getRandomTrickSpy = jest.spyOn(TrickBank, 'getRandomTrick');

    generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    expect(getRandomTrickSpy).toHaveBeenCalledTimes(3);
  });

  it('should assign the one of the blank choices to the correct trick parameter passed in', () => {
    const currentChoices = generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    // check choice array has exactly one Fakie Kickflip
    expect(currentChoices.filter((item) => item === MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP.name)).toHaveLength(1);
  });

  it('should assign 3 of the blank choices to the randomly generated tricks', () => {
    const currentChoices = generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    // check choice array has 3 heelflips, which are the mocked return of getRandomTrick()
    expect(currentChoices.filter((item) => item === MOCK_RANDOM_TRICK_AS_HEELFLIP.name)).toHaveLength(3);
  });

  it('should return a choice array with one correct trick name and 3 random trick names', () => {
    const currentChoices = generateChoices(MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP);

    const timesCorrectTrick = currentChoices.filter(
      (trickname) => trickname === MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP.name,
    );
    const timesRandomTrick = currentChoices.filter((trickname) => trickname === MOCK_RANDOM_TRICK_AS_HEELFLIP.name);

    expect(timesCorrectTrick).toHaveLength(1);
    expect(timesRandomTrick).toHaveLength(3);
  });
});
