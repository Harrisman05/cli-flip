import closeGifProcess from '../../../../src/utils/process/closeGifProcess';
import { MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES } from '../../../mocks/quizData.mock';
import * as removePlayStatusText from '../../../../src/utils/cleanTerminal/removePlayingStatusText';
import * as guessGif from '../../../../src/utils/quizControl/guessGif';

const removePlayingStatusTextSpy = jest.spyOn(removePlayStatusText, 'default').mockImplementation(() => null as any);
const guessGifSpy = jest.spyOn(guessGif, 'default').mockImplementation(() => null as any);

describe('closeGifProcess test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return callback and call removePlayingStatusText once when callback is invoked', () => {
    const closeCallback = closeGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    // simulate close callback being invoked, tai process on close event being triggered
    closeCallback();

    expect(removePlayingStatusTextSpy).toHaveBeenCalledTimes(1);
  });

  it('should return callback and call removePlayingStatusText once with correct parameter when callback is invoked', () => {
    const closeCallback = closeGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    closeCallback();

    expect(guessGifSpy).toHaveBeenCalledTimes(1);
    expect(guessGifSpy).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);
  });
});
