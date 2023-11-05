import * as getCurrentTrickBank from '../../../../src/utils/trickLogic/getCurrentTrickBank';
import * as getCorrectTrick from '../../../../src/utils/trickLogic/getCorrectTrick';
import * as getCurrentChoices from '../../../../src/utils/trickLogic/getCurrentChoices';
import generateTricks from '../../../../src/utils/trickLogic/generateTricks';

import {
  MOCK_EMPTY_QUIZ_TRICKS,
  MOCK_EMPTY_TRICK,
  MOCK_EMPTY_CHOICES,
  MOCK_QUIZ_TRICKS,
  MOCK_TRICK,
  MOCK_CHOICES,
} from '../../../mocks/quizData.mock';

describe('generateTricks test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call getCurrentTrickBank with quizTricks parameter passed into generateTricks', () => {
    const spyGetCurrentTrickBank = jest.spyOn(getCurrentTrickBank, 'default');

    generateTricks(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(spyGetCurrentTrickBank).toHaveBeenCalledWith(MOCK_QUIZ_TRICKS);
  });

  it('should call getCorrectTrick with return value of getCurrentTrickBank and trick parameter passed into generateTricks', () => {
    jest.spyOn(getCurrentTrickBank, 'default').mockReturnValue(MOCK_EMPTY_QUIZ_TRICKS);
    const spyGetCorrectTrick = jest.spyOn(getCorrectTrick, 'default');

    generateTricks(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(spyGetCorrectTrick).toHaveBeenCalledWith(MOCK_EMPTY_QUIZ_TRICKS, MOCK_TRICK);
  });

  it('should call getCurrentChoices with return value of getCorrectTrick and choices parameter passed into generateTricks', () => {
    jest.spyOn(getCorrectTrick, 'default').mockReturnValue(MOCK_EMPTY_TRICK);
    const spyGetCurrentChoices = jest.spyOn(getCurrentChoices, 'default');

    generateTricks(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(spyGetCurrentChoices).toHaveBeenCalledWith(MOCK_EMPTY_TRICK, MOCK_CHOICES);
  });

  it('should return the return values of getCurrentTrickBank, getCorrectTrick and getCurrentChoices', () => {
    jest.spyOn(getCurrentTrickBank, 'default').mockReturnValue(MOCK_EMPTY_QUIZ_TRICKS);
    jest.spyOn(getCorrectTrick, 'default').mockReturnValue(MOCK_EMPTY_TRICK);
    jest.spyOn(getCurrentChoices, 'default').mockReturnValue(MOCK_EMPTY_CHOICES);

    const [currentQuizTricks, correctTrick, currentChoices] = generateTricks(
      MOCK_QUIZ_TRICKS,
      MOCK_TRICK,
      MOCK_CHOICES,
    );

    expect(currentQuizTricks).toEqual(MOCK_EMPTY_QUIZ_TRICKS);
    expect(correctTrick).toEqual(MOCK_EMPTY_TRICK);
    expect(currentChoices).toEqual(MOCK_EMPTY_CHOICES);
  });
});
