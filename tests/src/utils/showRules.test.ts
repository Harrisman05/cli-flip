import showRules from '../../../src/utils/showRules';
import * as sleep from '../../../src/utils/sleep';

describe('showRules test suites', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call console.log and sleep 4 times each', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const sleepSpy = jest.spyOn(sleep, 'default').mockImplementation((_ms) => Promise.resolve());

    await showRules();

    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(sleepSpy).toHaveBeenCalledTimes(4);
  });
});
