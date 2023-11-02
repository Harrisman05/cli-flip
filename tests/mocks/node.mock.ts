import readline from 'readline';

export const MOCK_READLINE_INTERFACE = {
  close: jest.fn(),
} as unknown as readline.Interface;
