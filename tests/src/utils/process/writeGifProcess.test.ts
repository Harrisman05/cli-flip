import writeGifProcess from '../../../../src/utils/process/writeGifProcess';
import * as writeData from '../../../../src/utils/process/writeData';
import * as writePlayingStatus from '../../../../src/utils/process/writePlayingStatus';
import * as writeStance from '../../../../src/utils/process/writeStance';
import * as writeAnswerPromptReplica from '../../../../src/utils/process/writeAnswerPromptReplica';

import { MOCK_CHOICES, MOCK_TRICK } from '../../../mocks/quizData.mock';

const writeDataSpy = jest.spyOn(writeData, 'default').mockImplementation(() => null as any);
const writePlayingStatusSpy = jest.spyOn(writePlayingStatus, 'default').mockImplementation(() => null as any);
const writeStanceSpy = jest.spyOn(writeStance, 'default').mockImplementation(() => null as any);
const writeAnswerPromptReplicaSpy = jest
  .spyOn(writeAnswerPromptReplica, 'default')
  .mockImplementation(() => null as any);

describe('writeGifProcess test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return a callback function', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    expect(dataCallback).toBeInstanceOf(Function);
  });

  it('should call writeData once with correct parameters', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    // simulate callback being invoked, one stream of data coming from tai process stdout
    dataCallback('data');

    expect(writeDataSpy).toHaveBeenCalledTimes(1);
    expect(writeDataSpy).toHaveBeenCalledWith('data');
  });

  it('should call writePlayingStatus once', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    dataCallback('data');

    expect(writePlayingStatusSpy).toHaveBeenCalledTimes(1);
  });

  it('should call writeStance once with correct parameters', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    dataCallback('data');
    dataCallback('data');

    expect(writeStanceSpy).toHaveBeenCalledTimes(1);
    expect(writeStanceSpy).toHaveBeenCalledWith(MOCK_TRICK.stance);
  });

  it('should call writeAnswerPromptReplica once with correct parameters', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    dataCallback('data');

    expect(writeAnswerPromptReplicaSpy).toHaveBeenCalledTimes(1);
    expect(writeAnswerPromptReplicaSpy).toHaveBeenCalledWith(MOCK_CHOICES);
  });

  it('should call writeData as many times as the callback is invoked', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    // simulating 5 streams of data coming from tai process stdout

    dataCallback('data');
    dataCallback('data');
    dataCallback('data');
    dataCallback('data');
    dataCallback('data');

    expect(writeDataSpy).toHaveBeenCalledTimes(5);
  });

  it('should not call writePlayingStatus, writeStance and writeAnswerPromptReplica more than once even if callback is involved more than once', () => {
    const dataCallback = writeGifProcess(MOCK_CHOICES, MOCK_TRICK.stance);

    dataCallback('data');
    dataCallback('data');
    dataCallback('data');
    dataCallback('data');
    dataCallback('data');

    expect(writeStanceSpy).toHaveBeenCalledTimes(1);
    expect(writePlayingStatusSpy).toHaveBeenCalledTimes(1);
    expect(writeAnswerPromptReplicaSpy).toHaveBeenCalledTimes(1);
  });
});
