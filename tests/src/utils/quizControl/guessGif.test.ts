import guessGif from '../../../../src/utils/quizControl/guessGif';
import * as handleReplayGif from '../../../../src/utils/handleAnswers/handleReplayGif';
import * as handleCorrectAnswer from '../../../../src/utils/handleAnswers/handleCorrectAnswer';
import * as handleWrongAnswer from '../../../../src/utils/handleAnswers/handleWrongAnswer';
import {
  MOCK_QUIZ_TRICKS,
  MOCK_TRICK,
  MOCK_CHOICES,
  MOCK_CORRECT_CHOICE_ANSWER,
  MOCK_WRONG_CHOICE_ANSWER,
  MOCK_REPLAY_GIF_CHOICE,
} from '../../../mocks/quizData.mock';
import inquirer from 'inquirer';

const handleReplayGifSpy = jest.spyOn(handleReplayGif, 'default');
const handleCorrectAnswerSpy = jest.spyOn(handleCorrectAnswer, 'default');
const handleWrongAnswerSpy = jest.spyOn(handleWrongAnswer, 'default');

describe('guessGif test suites', () => {
  let inquirerSpy: any;

  beforeEach(() => {
    inquirerSpy = jest.spyOn(inquirer, 'prompt');
    jest.resetAllMocks();
  });

  it('should call handleReplayGif if answer choice is REPLAY GIF', async () => {
    // mock player choosing replay gif
    inquirerSpy.mockResolvedValue(MOCK_REPLAY_GIF_CHOICE);

    await guessGif(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(handleReplayGifSpy).toHaveBeenCalledTimes(1);
  });

  it('should call handleCorrectAnswer if answer choice is the same value as correctTrick name', async () => {
    // mock player choosing the correct answer
    inquirerSpy.mockResolvedValue(MOCK_CORRECT_CHOICE_ANSWER);

    await guessGif(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(handleCorrectAnswerSpy).toHaveBeenCalledTimes(1);
  });

  it('should call handleWrongAnswer if answer choice is not the same value as correctTrick name', async () => {
    // mock player choosing an incorrect answer
    inquirerSpy.mockResolvedValue(MOCK_WRONG_CHOICE_ANSWER);

    await guessGif(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(handleWrongAnswerSpy).toHaveBeenCalledTimes(1);
  });
});
