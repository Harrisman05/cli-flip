import removePlayingStatusText from '../../../../src/utils/cleanTerminal/removePlayingStatusText';
import readline from 'readline';

const spyReadlineClearLine = jest.spyOn(readline, 'clearLine').mockImplementation(() => null as any);
const spyReadlineMoveCursor = jest.spyOn(readline, 'moveCursor').mockImplementation(() => null as any);

describe('removePlayingStatusText test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call readline.clearLine once with correct parameters', () => {
    removePlayingStatusText();

    expect(spyReadlineClearLine).toHaveBeenCalledTimes(1);
    expect(spyReadlineClearLine).toHaveBeenCalledWith(process.stdout, 0);
  });

  it('should call readline.moveCursor once with correct parameters', () => {
    removePlayingStatusText();

    expect(spyReadlineMoveCursor).toHaveBeenCalledTimes(1);
    expect(spyReadlineMoveCursor).toHaveBeenCalledWith(process.stdout, 0, 3);
  });
});
