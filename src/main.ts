#!/usr/bin/env node

import { spawn } from 'child_process';
import readline from 'readline';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from './config/constants';
import getArgs from './utils/getArgs';
import writeTaiProcess from './utils/writeTaiProcess';
import errorTaiProcess from './utils/errorTaiProcess';
import removePromptText from './utils/removePromptText';
import showRules from './utils/showRules';

const main = async () => {
  await startQuiz();
};

const startQuiz = async () => {
  chalk.bgBlue(console.log('Welcome to the flip-tricks-ascii quiz!'));
  await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continue',
      message: 'Press Enter to start quiz',
      default: true
    }
  ]);
  await showRules();
  startGif();
};

const guessGif = async (args: string[]) => {
  // const correctTrick = args.at(-1);
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'tricks',
      message: 'Guess the trick! 🛹🤔',
      choices: [
        `${chalk.dim('REPLAY GIF')}`,
        'Kickflip',
        'Heelflip',
        'Treflip',
        'Lazerflip'
      ]
    }
  ]);
  console.log(answers.tricks);
  if (answers.tricks === `${chalk.dim('REPLAY GIF')}`) {
    startGif(args);
  }
  if (answers.tricks === 'Kickflip') console.log('CORRECT');
};

const startGif = (args: string[] = []) => {
  const currentArgs = args.length ? args : getArgs();
  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...currentArgs]);

  // Creating this interface prevents the user from inputting early
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Write out the data
  taiProcess.stdout.on('data', writeTaiProcess);
  taiProcess.stderr.on('data', errorTaiProcess);

  // close stream, remove the prompt text and close rl interface
  taiProcess.on('close', async () => {
    removePromptText();
    rl.close(); // close the interface to prevent the too many event listeners attached bug
    await guessGif(currentArgs);
  });
};

main();
