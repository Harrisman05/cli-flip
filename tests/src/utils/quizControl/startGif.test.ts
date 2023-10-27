import * as generateTricks from '../../../../src/utils/trickLogic/generateTricks';
import * as spawnGifProcess from '../../../../src/utils/process/spawnGifProcess';
import startGif from '../../../../src/utils/quizControl/startGif';

import {
  MOCK_EMPTY_QUIZ_TRICKS,
  MOCK_EMPTY_TRICK,
  MOCK_EMPTY_CHOICES,
  MOCK_QUIZ_TRICKS,
  MOCK_TRICK,
  MOCK_CHOICES,
} from '../../../mocks/quizData.mock';

describe('startGif test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call generateTricks with parameters passed into startGif', () => {
    jest.spyOn(spawnGifProcess, 'default').mockImplementation(() => {});

    const generateTricksSpy = jest.spyOn(generateTricks, 'default');

    startGif(MOCK_EMPTY_QUIZ_TRICKS, MOCK_EMPTY_TRICK, MOCK_EMPTY_CHOICES);

    expect(generateTricksSpy).toBeCalledWith(MOCK_EMPTY_QUIZ_TRICKS, MOCK_EMPTY_TRICK, MOCK_EMPTY_CHOICES);
  });

  it('should call spawnGifProcess with variables created by generateTricks', () => {
    const spawnGifProcessSpy = jest.spyOn(spawnGifProcess, 'default').mockImplementation(() => {});

    jest.spyOn(generateTricks, 'default').mockReturnValue([MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES]);

    startGif();

    expect(spawnGifProcessSpy).toBeCalledWith(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);
  });
});
