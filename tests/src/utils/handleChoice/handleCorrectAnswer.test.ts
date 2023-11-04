import handleCorrectAnswer from '../../../../src/utils/handleChoice/handleCorrectAnswer';
import * as displayCorrectAscii from '../../../../src/utils/displayText/displayCorrectAscii';
import * as updateCorrectScore from '../../../../src/utils/score/updateCorrectScore';
import * as clearScoreboard from '../../../../src/utils/cleanTerminal/clearScoreboard';
import * as prepareNextGif from '../../../../src/utils/quizControl/prepareNextGif';
import * as sleep from '../../../../src/utils/sleep';
import { MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';

const displayCorrectAsciiSpy = jest.spyOn(displayCorrectAscii, 'default').mockImplementation(() => null as any);
const updateCorrectScoreSpy = jest.spyOn(updateCorrectScore, 'default').mockImplementation(() => null as any);
const clearScoreboardSpy = jest.spyOn(clearScoreboard, 'default').mockImplementation(() => null as any);
const sleepSpy = jest.spyOn(sleep, 'default').mockImplementation(() => Promise.resolve());
const prepareNextGifSpy = jest.spyOn(prepareNextGif, 'default').mockImplementation(() => null as any);

describe('handleCorrectAnswer test suites', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call displayCorrectAscii once', () => {
    handleCorrectAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(displayCorrectAsciiSpy).toHaveBeenCalledTimes(1);
  });
  it('should call updateCorrectScore once', () => {
    handleCorrectAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(updateCorrectScoreSpy).toHaveBeenCalledTimes(1);
  });
  it('should call clearScoreboard once', () => {
    handleCorrectAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(clearScoreboardSpy).toHaveBeenCalledTimes(1);
  });
  it('should call sleep once', () => {
    handleCorrectAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(sleepSpy).toHaveBeenCalledTimes(1);
  });
  it('should call prepareNextGif once', async () => {
    // TO-DO understand why await is needed even tho sleep promise to mocked to immediately resolve, so all code should exexute sync and await shouldn't be required
    await handleCorrectAnswer(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(prepareNextGifSpy).toHaveBeenCalledTimes(1);
  });
});
