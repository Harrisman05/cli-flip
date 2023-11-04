import handleReplayGif from '../../../../src/utils/handleAnswers/handleReplayGif';
import * as clearAllOutput from '../../../../src/utils/cleanTerminal/clearAllOutput';
import * as startGif from '../../../../src/utils/quizControl/startGif';
import { MOCK_CHOICES, MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';

const clearAllOutputSpy = jest.spyOn(clearAllOutput, 'default');
const startGifSpy = jest.spyOn(startGif, 'default');

describe('handleReplayGif test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call clearAllOutput once', () => {
    handleReplayGif(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(clearAllOutputSpy).toHaveBeenCalledTimes(1);
  });

  it('should call startGif once with correct parameters', () => {
    handleReplayGif(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(startGifSpy).toHaveBeenCalledTimes(1);
    expect(startGifSpy).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);
  });
});
