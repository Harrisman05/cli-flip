import writeAnswerPromptReplica from '../../../../src/utils/process/writeAnswerPromptReplica';
import { score } from '../../../../src/model/Score';
import { MOCK_CHOICES } from '../../../mocks/quizData.mock';
import chalk from 'chalk';

// can't figure out how to mock this without hardcoded values
jest.mock('../../../../src/model/Score', () => ({
  score: {
    correctAnswers: 5,
    incorrectAnswers: 4,
    currentQuestion: 9,
    totalQuestions: 15,
  },
}));

describe('writeAnswerPromptReplica test suites', () => {
  let mockWrite: any;

  beforeEach(() => {
    mockWrite = jest.spyOn(process.stdout, 'write').mockImplementation(() => null as any);
    jest.resetAllMocks();
  });

  it('should call process.stdout.write once', () => {
    writeAnswerPromptReplica(MOCK_CHOICES);
    expect(mockWrite).toHaveBeenCalledTimes(1);
  });
  it('should call process.stdout.write with all the choices in the string ', () => {
    writeAnswerPromptReplica(MOCK_CHOICES);

    for (const choice of MOCK_CHOICES) {
      expect(mockWrite).toHaveBeenCalledWith(expect.stringContaining(choice));
    }
  });
  it('should call process.stdout.write with mock score values', () => {
    writeAnswerPromptReplica(MOCK_CHOICES);

    // check mock values is being used as score was difficult to mock
    expect(score.correctAnswers).toEqual(5);
    expect(score.incorrectAnswers).toEqual(4);
    expect(score.currentQuestion).toEqual(9);
    expect(score.totalQuestions).toEqual(15);

    expect(mockWrite).toHaveBeenCalledWith(
      expect.stringContaining(
        `✅ - ${chalk.green(score.correctAnswers)} | ❌ - ${chalk.red(score.incorrectAnswers)} | ${
          score.currentQuestion
        }/${score.totalQuestions}`,
      ),
    );
  });
});
