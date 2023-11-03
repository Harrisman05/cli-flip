import writePlayingStatus from '../../../../src/utils/process/writePlayingStatus';

describe('writePlayingStatus test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call process.stdout.write once with string', () => {
    const mockWrite = jest.spyOn(process.stdout, 'write');
    writePlayingStatus();
    expect(mockWrite).toHaveBeenCalledTimes(1);
    expect(mockWrite).toHaveBeenCalledWith(expect.any(String));
  });
});
