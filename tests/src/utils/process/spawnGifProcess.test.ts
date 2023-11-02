import spawnGifProcess from '../../../../src/utils/process/spawnGifProcess';
import * as child_process from 'child_process';
import mockStdin from 'mock-stdin';

import * as writeGifProcess from '../../../../src/utils/process/writeGifProcess';
import * as getProcessArgs from '../../../../src/utils/process/getProcessArgs';
import * as closeGifProcess from '../../../../src/utils/process/closeGifProcess';
import readline from 'readline';
import { MOCK_CHOICES, MOCK_QUIZ_TRICKS, MOCK_TRICK } from '../../../mocks/quizData.mock';
import { MOCK_TAI_BINARY_EXECUTABLE_FILEPATH, MOCK_TAI_SCRIPT_ARGUMENTS } from '../../../mocks/constants.mock';
import { MOCK_READLINE_INTERFACE } from '../../../mocks/node.mock';

// Module mock child_process to override it's default functionality
jest.mock('child_process');

describe('spawnGifProcess test suites', () => {
  let mockSpawn: any;
  let writeGifProcessSpy: any;
  let getProcessArgsSpy: any;
  let readlineSpy: any;
  let closeGifProcessSpy: any;

  beforeEach(() => {
    // Mock stdin using library
    mockStdin.stdin();

    // Set-up spies on dependencies getting called, inside beforeEach hook so they can be used across multiple tests and do not break the implementation after running once.

    readlineSpy = jest.spyOn(readline, 'createInterface').mockImplementation(() => MOCK_READLINE_INTERFACE);
    writeGifProcessSpy = jest.spyOn(writeGifProcess, 'default').mockImplementation(() => jest.fn());
    getProcessArgsSpy = jest.spyOn(getProcessArgs, 'default').mockImplementation(() => MOCK_TAI_SCRIPT_ARGUMENTS);
    closeGifProcessSpy = jest.spyOn(closeGifProcess, 'default').mockImplementation(() => jest.fn());

    // override spawn to return methods needed for spawnGifProcess to work. This is the only way I can figure out how to mock and implement spawn in ES6 syntax. In reality the spies are called back as a callback but I've just mocked it in a more simple way

    mockSpawn = child_process.spawn as jest.Mock;
    mockSpawn.mockImplementation(() => {
      return {
        stdout: {
          on: (): any => writeGifProcessSpy,
        },
        on: (): any => closeGifProcessSpy,
      };
    });
  });

  afterEach(() => {
    mockStdin.stdin().restore();
    jest.resetAllMocks();
  });

  it('should call readline.createInterface once', () => {
    spawnGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(readlineSpy).toHaveBeenCalledTimes(1);
    expect(readlineSpy).toHaveBeenCalledWith({ input: process.stdin });
  });

  it('should call child_process spawn once with correct parameters', () => {
    spawnGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(mockSpawn).toHaveBeenCalledTimes(1);
    expect(mockSpawn).toHaveBeenCalledWith(MOCK_TAI_BINARY_EXECUTABLE_FILEPATH, [
      ...getProcessArgsSpy(),
      MOCK_TRICK.filepath,
    ]);
  });
  it('should call getProcessArgs once', () => {
    spawnGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(getProcessArgsSpy).toHaveBeenCalledTimes(1);
  });
  it('should call writeGifProcess once with correct parameters', () => {
    spawnGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(writeGifProcessSpy).toHaveBeenCalledTimes(1);
    expect(writeGifProcessSpy).toHaveBeenCalledWith(MOCK_CHOICES, MOCK_TRICK.stance);
  });

  it('should call guessGif once with correct parameter', () => {
    spawnGifProcess(MOCK_QUIZ_TRICKS, MOCK_TRICK, MOCK_CHOICES);

    expect(closeGifProcessSpy).toHaveBeenCalledTimes(1);
    expect(closeGifProcessSpy).toHaveBeenCalledWith(
      MOCK_QUIZ_TRICKS,
      MOCK_TRICK,
      MOCK_CHOICES,
      MOCK_READLINE_INTERFACE,
    );
  });
});
