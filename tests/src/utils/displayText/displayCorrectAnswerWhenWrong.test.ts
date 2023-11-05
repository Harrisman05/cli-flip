import displayCorrectAnswerWhenWrong from '../../../../src/utils/displayText/displayCorrectAnswerWhenWrong';
import { MOCK_TRICK } from '../../../mocks/quizData.mock';

describe('displayCorrectTrickAscii test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call console.log once with string', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => null as any);

    displayCorrectAnswerWhenWrong(MOCK_TRICK);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(String));
  });
});
