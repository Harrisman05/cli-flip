import updateQuizTricks from '../../../../src/utils/trickLogic/updateQuizTricks';
import { TrickBank } from '../../../../src/model/TrickBank';
import { MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';

jest.mock('../../../../src/model/TrickBank', () => ({
  TrickBank: {
    deleteTrick: jest.fn(),
  },
}));

describe('updateQuizTricks test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call TrickBank.deleteTrick once with correct parameters', () => {
    updateQuizTricks(MOCK_QUIZ_TRICKS, MOCK_TRICK);

    expect(TrickBank.deleteTrick).toHaveBeenCalledTimes(1);
    expect(TrickBank.deleteTrick).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS, MOCK_TRICK);
  });
});
