import writeStance from '../../../../src/utils/process/writeStance';
import { MOCK_TRICK } from '../../../mocks/quizData.mock';

describe('writeStance test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call process.stdout.write once with string containing stance', () => {
    const mockWrite = jest.spyOn(process.stdout, 'write');
    writeStance(MOCK_TRICK.stance);
    expect(mockWrite).toHaveBeenCalledTimes(1);
    expect(mockWrite).toHaveBeenCalledWith(expect.stringContaining(MOCK_TRICK.stance));
  });
});
