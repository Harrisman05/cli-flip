import updateWrongScore from '../../../../src/utils/score/updateWrongScore';
import { score } from '../../../../src/model/Score';

jest.mock('../../../../src/model/Score', () => ({
  score: {
    addIncorrectAnswer: jest.fn(),
    nextQuestion: jest.fn(),
  },
}));

describe('udpateWrongScore test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call score.addCorrectAnswer once', () => {
    updateWrongScore();

    expect(score.addIncorrectAnswer).toHaveBeenCalledTimes(1);
  });
  it('should call score.nextQuestion once', () => {
    updateWrongScore();
    expect(score.nextQuestion).toHaveBeenCalledTimes(1);
  });
});
