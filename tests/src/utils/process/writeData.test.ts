import writeData from '../../../../src/utils/process/writeData';

describe('writeData test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call process.stdout.write once with correct parameter', () => {
    const mockWrite = jest.spyOn(process.stdout, 'write');
    writeData('data');
    expect(mockWrite).toHaveBeenCalledTimes(1);
    expect(mockWrite).toHaveBeenCalledWith('data');
  });
});
