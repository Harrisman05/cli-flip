import { Tricks } from '../../../../../src/model/Tricks';
import getCurrentTrickBank from '../../../../../src/utils/trickLogic/getCurrentTrickBank';

import { MOCK_EMPTY_QUIZ_TRICKS, MOCK_QUIZ_TRICKS, MOCK_TRICKBANK } from '../../../../mocks/quizData.mock';

jest.mock('../../../../../src/model/TrickBank', () => {
  return {
    TrickBank: class MockTrickBank {
      get trickbank(): Tricks {
        return MOCK_TRICKBANK; // force getter to return MOCK_TRICKBANK for second test. jest.spyOn doesn't work as new Trickbank instances are created when function is ran and jest.spyOn can only spy on a created instance in the test scope. Dependency injection could solve this, but I need to call the constructor in this function
      }
    },
  };
});

describe('getCurrentTrickBank test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return quizTricks passed in if quizTricks has properties', () => {
    const currentTrickbank = getCurrentTrickBank(MOCK_QUIZ_TRICKS);

    expect(currentTrickbank).toEqual(MOCK_QUIZ_TRICKS);
  });

  it('should return a new trickbank if quizTricks passed in has no properties', () => {
    const currentTrickbank = getCurrentTrickBank(MOCK_EMPTY_QUIZ_TRICKS);

    expect(currentTrickbank).toEqual(MOCK_TRICKBANK);
  });
});
