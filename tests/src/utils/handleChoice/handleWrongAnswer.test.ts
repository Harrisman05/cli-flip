import handleWrongAnswer from '../../../../src/utils/handleChoice/handleWrongAnswer';
import * as displayWrongAscii from '../../../../src/utils/displayText/displayWrongAscii';
import * as updateWrongScore from '../../../../src/utils/score/updateWrongScore';
import * as clearScoreboard from '../../../../src/utils/cleanTerminal/clearScoreboard';
import * as displayCorrectAnswerWhenWrong from '../../../../src/utils/displayText/displayCorrectAnswerWhenWrong';
import * as sleep from '../../../../src/utils/sleep';
import * as prepareNextGif from '../../../../src/utils/quizControl/prepareNextGif';
import { MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';

const displayWrongAsciiSpy = jest.spyOn(displayWrongAscii, 'default').mockImplementation(() => null as any);
const updateWrongScoreSpy = jest.spyOn(updateWrongScore, 'default').mockImplementation(() => null as any);
const clearScoreboardSpy = jest.spyOn(clearScoreboard, 'default').mockImplementation(() => null as any);
const displayCorrectAnswerWhenWrongSpy = jest
  .spyOn(displayCorrectAnswerWhenWrong, 'default')
  .mockImplementation(() => null as any);
const sleepSpy = jest.spyOn(sleep, 'default').mockImplementation(() => Promise.resolve());
const prepareNextGifSpy = jest.spyOn(prepareNextGif, 'default').mockImplementation(() => null as any);

describe('handleWrongAnswer test suites', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call displayWrongAscii once', () => {
    handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(displayWrongAsciiSpy).toHaveBeenCalledTimes(1);
  });
  it('should call updateWrongScore once', () => {
    handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(updateWrongScoreSpy).toHaveBeenCalledTimes(1);
  });
  it('should call clearScoreboard once', () => {
    handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(clearScoreboardSpy).toHaveBeenCalledTimes(1);
  });
  it('should call displayCorrectAnswerWhenWrong once', () => {
    handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(displayCorrectAnswerWhenWrongSpy).toHaveBeenCalledTimes(1);
  });
  it('should call sleep once', () => {
    handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(sleepSpy).toHaveBeenCalledTimes(1);
  });
  it('should call prepareNextGif once', async () => {
    await handleWrongAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(prepareNextGifSpy).toHaveBeenCalledTimes(1);
  });
});
