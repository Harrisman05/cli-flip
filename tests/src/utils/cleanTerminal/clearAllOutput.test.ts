import clearAllOutput from '../../../../src/utils/cleanTerminal/clearAllOutput';

describe('clearAllOutput test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call process.stdout.write once with string containing clear output code', () => {
    const mockWrite = jest.spyOn(process.stdout, 'write').mockImplementation(() => null as any);
    clearAllOutput();
    expect(mockWrite).toHaveBeenCalledTimes(1);
    expect(mockWrite).toHaveBeenCalledWith(expect.stringContaining('\x1B[0J'));
  });
});
