#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import showRules from './utils/showRules';
import startGif from './utils/quizControl/startGif';
import { checkAssets } from './downloads/checkAssets';

export const main = async (): Promise<void> => {
  await checkAssets();
  await startQuiz();
};

export const startQuiz = async (): Promise<void> => {
  chalk.bgBlue(console.log('Welcome to the flip-tricks-ascii quiz!'));
  await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Press Enter to start quiz',
      default: true,
    },
  ]);
  await showRules();
  startGif();
};

/* istanbul ignore next */
if (require.main === module) {
  // To prevents test contamination, only call the main function if this script is ran directly.
  main();
}
