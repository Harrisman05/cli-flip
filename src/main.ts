#!/usr/bin/env node

import { spawn } from 'child_process';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from './config/constants';
import { getArgs } from './utils/getArgs';

function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

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
  await startAscii();
};

const startAscii = async (i = 2, args: string[] = []) => {
  const currentArgs = args.length ? args : getArgs();
  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...currentArgs]);

  // how to force stdout streams to wait - https://kisaragi-hiu.com/nodejs-cmd/
  return new Promise(() => {
    // Write out the data

    taiProcess.stdout.on('data', (data: string) => {
      process.stdout.write(data);
      process.stdout.write('\n');
      process.stdout.write('\n');
      process.stdout.write(chalk.bgBlue('Skater stance: ...TODO!'));
      process.stdout.write('\n');
      process.stdout.write('\n');
    });

    taiProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    // close stream and replay or return to quiz
    taiProcess.on('close', async () => {
      i > 0 ? await startAscii(i - 1, currentArgs) : startQuiz();
    });
  });
};

const showRules = async () => {
  console.log('see if we sleep...');
  await sleep(100);
  console.log('2nd one');
  await sleep(100);
  console.log('3rd one');
  await sleep(100);
  console.log('Leggo!');
  await sleep(100);
};

main();
