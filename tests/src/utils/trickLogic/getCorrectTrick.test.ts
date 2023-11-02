import getCorrectTrick from '../../../../src/utils/trickLogic/getCorrectTrick';
import { MOCK_EMPTY_QUIZ_TRICKS, MOCK_EMPTY_TRICK, MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';
import * as Trickbank from '../../../../src/model/TrickBank';

describe('getCorrectTrickBank test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return trick passed in if trick has properties', () => {
    const correctTrick = getCorrectTrick(MOCK_EMPTY_QUIZ_TRICKS, MOCK_TRICK);

    expect(correctTrick).toEqual(MOCK_TRICK);
  });

  it('should return a random trick if trick passed in has no properties', () => {
    const getRandomTrickSpy = jest.spyOn(Trickbank.TrickBank, 'getRandomTrick').mockReturnValue(MOCK_TRICK);

    const correctTrick = getCorrectTrick(MOCK_QUIZ_TRICKS, MOCK_EMPTY_TRICK);

    expect(correctTrick).toEqual(MOCK_TRICK);
    expect(getRandomTrickSpy).toHaveBeenCalledTimes(1);
  });
});
