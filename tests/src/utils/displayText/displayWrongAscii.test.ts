import displayWrongAscii from '../../../../src/utils/displayText/displayWrongAscii';

describe('displayWrongAscii test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call console.log once with string', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => null as any);

    displayWrongAscii();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(String));
  });
});
