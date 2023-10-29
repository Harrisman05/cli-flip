import getCurrentChoices from '../../../../../src/utils/trickLogic/getCurrentChoices';
import { MOCK_CHOICES, MOCK_EMPTY_CHOICES, MOCK_EMPTY_TRICK, MOCK_TRICK } from '../../../../mocks/quizData.mock';
import * as generateChoices from '../../../../../src/utils/trickLogic/generateChoices';

describe('getCurrentChoices test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return choices passed in if choices has properties', () => {
    const currentChoices = getCurrentChoices(MOCK_EMPTY_TRICK, MOCK_CHOICES);

    expect(currentChoices).toEqual(MOCK_CHOICES);
  });

  it('should call generateChoices if choices passed has no properties', () => {
    const generateChoicesSpy = jest.spyOn(generateChoices, 'default').mockReturnValue(MOCK_CHOICES);

    const currentChoices = getCurrentChoices(MOCK_TRICK, MOCK_EMPTY_CHOICES);

    expect(currentChoices).toEqual(MOCK_CHOICES);
    expect(generateChoicesSpy).toHaveBeenCalledTimes(1);
  });
});
