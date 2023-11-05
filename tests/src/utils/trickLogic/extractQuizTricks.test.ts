import extractQuizTricks from '../../../../src/utils/trickLogic/extractQuizTricks';
import { MOCK_EXTRACTED_QUIZ_TRICKS } from '../../../mocks/quizData.mock';

jest.mock('../../../../src/data/masterTrickStore', () => ({
  kickflips: {
    kickflip: {},
    switchKickflip: {
      name: 'Switch Kickflip',
      propName: 'switchKickflip',
      filepath: `./assets/masterTrickStore/kickflips/switch-kickflip.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    nollieKickflip: {},
    fakieKickflip: {
      name: 'Fakie Kickflip',
      propName: 'fakieKickflip',
      filepath: `$./assets/masterTrickStore/kickflips/fakie-kickflip.gif`,
      skater: 'John Chyk',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    },
  },
}));

describe('updateQuizTricks test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should convert a masterTrickStore into quiz tricks', () => {
    const extractedTricks = extractQuizTricks();

    expect(extractedTricks).toEqual(MOCK_EXTRACTED_QUIZ_TRICKS);
  });
});
