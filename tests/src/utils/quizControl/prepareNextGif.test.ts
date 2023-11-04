import prepareNextGif from '../../../../src/utils/quizControl/prepareNextGif';
import * as clearAllOutput from '../../../../src/utils/cleanTerminal/clearAllOutput';
import * as updateQuizTricks from '../../../../src/utils/trickLogic/updateQuizTricks';
import * as startGif from '../../../../src/utils/quizControl/startGif';
import { MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';

const clearAllOutputSpy = jest.spyOn(clearAllOutput, 'default').mockImplementation(() => null as any);
const updateQuizTricksSpy = jest.spyOn(updateQuizTricks, 'default').mockImplementation(() => null as any);
const startGifSpy = jest.spyOn(startGif, 'default').mockImplementation(() => null as any);

describe('prepareNextGif test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call clearAllOutput once', () => {
    prepareNextGif(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(clearAllOutputSpy).toHaveBeenCalledTimes(1);
  });

  it('should call updateQuizTricks once with correct parameters', () => {
    prepareNextGif(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(updateQuizTricksSpy).toHaveBeenCalledTimes(1);
    expect(updateQuizTricksSpy).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS, MOCK_TRICK);
  });

  it('should call startGif once with return value from updatedQuizTricks', () => {
    // force quizTricks to return MOCK_QUIZ_TRICKS
    updateQuizTricksSpy.mockReturnValue(MOCK_QUIZ_TRICKS);

    prepareNextGif(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(startGifSpy).toHaveBeenCalledTimes(1);
    expect(startGifSpy).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS);
  });
});
