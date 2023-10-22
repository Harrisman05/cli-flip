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
import { Trick } from './model/Trick';
import { Tricks } from './model/Tricks';
import getCurrentTrickBank from './utils/getCurrentTrickBank';
import getCorrectTrick from './utils/getCorrectTrick';
import getCurrentChoices from './utils/getCurrentChoices';
import { score } from './model/Score';
import sleep from './utils/sleep';
import { TrickBank } from './model/TrickBank';

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
      default: true,
    },
  ]);
  await showRules();
  startGif();
};

const guessGif = async (quizTricks: Tricks, correctTrick: Trick, choices: string[]) => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'trick',
      message: 'Guess the trick! 🛹🤔',
      choices: [`${chalk.dim('REPLAY GIF')}`, ...choices.map((choice) => chalk.yellow(choice))],
    },
  ]);
  if (answer.trick === `${chalk.dim('REPLAY GIF')}`) {
    process.stdout.write('\x1B[0J');
    startGif(quizTricks, correctTrick, choices);
  } else if (answer.trick === `${chalk.yellow(`${correctTrick.name}`)}`) {
    console.log(
      chalk.green(`
     ____                         _   
    / ___|___  _ __ _ __ ___  ___| |_ 
   | |   / _ \\| '__| '__/ _ \\/ __| __|
   | |__| (_) | |  | | |  __/ (__| |_ 
    \\____\\___/|_|  |_|  \\___|/\\___|\\_|

    `),
    );
    score.addCorrectAnswer();
    score.nextQuestion();
    const updatedQuizTricks = TrickBank.deleteTrick(quizTricks, correctTrick); // delete the just answered trick name to remove it from next possible set of correct tricks, preventing question duplication
    readline.moveCursor(process.stdout, 0, -2);
    readline.clearLine(process.stdout, 0);
    await sleep(1000);
    process.stdout.write('\x1B[0J');
    startGif(updatedQuizTricks);
  } else if (answer.trick !== `${chalk.yellow(`${correctTrick.name}`)}`) {
    console.log(
      chalk.red(`
    __        __                     
    \\ \\      / / __ ___  _ __   __ _ 
     \\ \\ /\\ / / '__/ _ \\| '_ \\ / _  |
      \\ V  V /| | | (_) | | | | (_| |
       \\_/\\_/ |_|  \\___/|_| |_|\\__, |
                               |___/ 
    
    `),
    );
    score.addIncorrectAnswer();
    score.nextQuestion();
    const updatedQuizTricks = TrickBank.deleteTrick(quizTricks, correctTrick); // delete the just answered trick name to remove it from next possible set of correct tricks, preventing question duplication
    readline.moveCursor(process.stdout, 0, -2);
    readline.clearLine(process.stdout, 0);
    await sleep(1000);
    process.stdout.write('\x1B[0J');
    startGif(updatedQuizTricks);
  }
};

const startGif = (
  quizTricks: Tricks = {} as Tricks,
  trick: Trick = {} as Trick,
  choices: string[] = [] as string[],
) => {
  // use type assertion to allow empty object to pass for first call
  const currentQuizTricks = getCurrentTrickBank(quizTricks);
  const correctTrick = getCorrectTrick(currentQuizTricks, trick);
  const currentChoices = getCurrentChoices(correctTrick, choices);
  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...getArgs(), correctTrick.filepath]);

  // Creating this interface prevents the user from inputting early
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Write out the data
  taiProcess.stdout.on('data', writeTaiProcess(currentChoices, correctTrick.stance)); // horrible, but this gets an extra parameters into the writeTaiProcess callback
  taiProcess.stderr.on('data', errorTaiProcess);

  // close stream, remove the prompt text and close rl interface
  taiProcess.on('close', async () => {
    removePromptText();
    rl.close();
    await guessGif(currentQuizTricks, correctTrick, currentChoices);
  });
};

main();
