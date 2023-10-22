#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import showRules from './utils/showRules';
import startGif from './utils/quizControl/startGif';

const main = async (): Promise<void> => {
  await startQuiz();
};

const startQuiz = async (): Promise<void> => {
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

main();
