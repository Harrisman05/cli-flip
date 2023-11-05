import { TAI_SCRIPT_ARGUMENTS } from '../../src/config/constants';

export const MOCK_TAI_BINARY_EXECUTABLE_FILEPATH = './rust-binaries/target/release/tai';

export const MOCK_TAI_SCRIPT_ARGUMENTS = [
  '-d',
  '-D',
  '255',
  '--scale',
  '1',
  '--sleep',
  '65',
  '--once',
] as TAI_SCRIPT_ARGUMENTS[];
