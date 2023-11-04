import clearScoreboard from '../../../../src/utils/cleanTerminal/clearScoreboard';
import readline from 'readline';

const spyReadlineMoveCursor = jest.spyOn(readline, 'moveCursor').mockImplementation(() => null as any);
const spyReadlineClearLine = jest.spyOn(readline, 'clearLine').mockImplementation(() => null as any);

describe('removePlayingStatusText test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call readline.moveCursor once with correct parameters', () => {
    clearScoreboard();

    expect(spyReadlineMoveCursor).toHaveBeenCalledTimes(1);
    expect(spyReadlineMoveCursor).toHaveBeenCalledWith(process.stdout, 0, -2);
  });
  it('should call readline.moveCursor once with correct parameters', () => {
    clearScoreboard();

    expect(spyReadlineClearLine).toHaveBeenCalledTimes(1);
    expect(spyReadlineClearLine).toHaveBeenCalledWith(process.stdout, 0);
  });
});
