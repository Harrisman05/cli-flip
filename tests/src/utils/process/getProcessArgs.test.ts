import getProcessArgs from '../../../../src/utils/process/getProcessArgs';
import { MOCK_TAI_SCRIPT_ARGUMENTS } from '../../../mocks/constants.mock';

describe('getProcessArgs test suites', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return an array of TAI_SCRIPT_ARGUMENTS', () => {
    // no need to mock TAI_SCRIPT_ARGUMENTS enum as it's constant
    const processArgs = getProcessArgs();

    expect(processArgs).toEqual(MOCK_TAI_SCRIPT_ARGUMENTS);
  });
});
