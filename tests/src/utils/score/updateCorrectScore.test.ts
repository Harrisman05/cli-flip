import updateCorrectScore from '../../../../src/utils/score/updateCorrectScore';
import { score } from '../../../../src/model/Score';

jest.mock('../../../../src/model/Score', () => ({
  score: {
    addCorrectAnswer: jest.fn(),
    nextQuestion: jest.fn(),
  },
}));

describe('udpateCorrectScore test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call score.addCorrectAnswer once', () => {
    updateCorrectScore();

    expect(score.addCorrectAnswer).toHaveBeenCalledTimes(1);
  });
  it('should call score.nextQuestion once', () => {
    updateCorrectScore();
    expect(score.nextQuestion).toHaveBeenCalledTimes(1);
  });
});
