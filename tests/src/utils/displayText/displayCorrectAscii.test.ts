import displayCorrectTrickAscii from '../../../../src/utils/displayText/displayCorrectAscii';

describe('displayCorrectTrickAscii test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call console.log once with string', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => null as any);

    displayCorrectTrickAscii();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(String));
  });
});
