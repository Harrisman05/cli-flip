import sleep from '../../../src/utils/sleep';

describe('sleep test suites', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call setTimeout with miliseconds parameter passed in', async () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    const mockMilliSeconds = 5000;

    // call sleep but don't resolve the promise yet...
    const sleepPromise = sleep(mockMilliSeconds);
    // advance time by 5000 seconds to prevent hangup in tests
    jest.advanceTimersByTime(mockMilliSeconds);

    // resolve the promise to check if resolve() was called
    await expect(sleepPromise).resolves.toBeUndefined();

    // setTimeout should have been called with ms :)
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), mockMilliSeconds);
  });
});
