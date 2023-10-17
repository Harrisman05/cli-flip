#!/usr/bin/env node

import { spawn } from 'child_process';
import readline from 'readline';
import select from '@inquirer/select';
import confirm from '@inquirer/confirm';
import chalk from 'chalk';
import { TAI_BINARY_EXECUTABLE_FILEPATH } from './config/constants.js';
import getArgs from './utils/getArgs.js';
import writeTaiProcess from './utils/writeTaiProcess.js';
import errorTaiProcess from './utils/errorTaiProcess.js';
import removePromptText from './utils/removePromptText.js';
import showRules from './utils/showRules.js';
import { Trick } from './model/Trick.js';
import { TrickBank } from './model/TrickBank.js';
import getCurrentTrickBank from './utils/getCurrentTrickBank.js';
import getCorrectTrick from './utils/getCorrectTrick.js';
import getCurrentChoices from './utils/getCurrentChoices.js';
import { score } from './model/Score.js';

const main = async () => {
  await startQuiz();
};

const startQuiz = async () => {
  chalk.bgBlue(console.log('Welcome to the flip-tricks-ascii quiz!'));
  await confirm({ message: 'Continue?', default: true });
  await showRules();
  startGif();
};

const guessGif = async (currrentTrickBank: TrickBank, correctTrick: Trick, choices: string[]) => {
  const answer = await select({
    message: 'Guess the trick! 🛹🤔',
    choices: [
      { value: `${chalk.dim('REPLAY GIF')}` },
      { value: `${choices[0]}` },
      { value: `${choices[1]}` },
      { value: `${choices[2]}` },
      { value: `${choices[3]}` },
    ],
  });
  console.log(
    `✅ - ${score.correctAnswers} | ❌ - ${score.incorrectAnswers} | ${score.currentQuestion}/${score.totalQuestions}`,
  );

  if (answer === `${chalk.dim('REPLAY GIF')}`) {
    process.stdout.write('\x1B[0J');
    startGif(currrentTrickBank, correctTrick, choices);
  } else if (answer === correctTrick.name) {
    console.log('CORRECT');
    score.addCorrectAnswer();
    score.nextQuestion();
    delete currrentTrickBank[correctTrick.propName]; // delete the just answered trick name to remove it from next possible set of correct tricks, preventing question duplication
    process.stdout.write('\x1B[0J');
    startGif(currrentTrickBank);
  } else if (answer !== correctTrick.name) {
    console.log('WRONG');
    score.addIncorrectAnswer();
    score.nextQuestion();
    delete currrentTrickBank[correctTrick.propName];
    process.stdout.write('\x1B[0J');
    startGif(currrentTrickBank);
  }
};

const startGif = (
  trickBank: TrickBank = {} as TrickBank,
  trick: Trick = {} as Trick,
  choices: string[] = [] as string[],
) => {
  // use type assertion to allow empty object to pass for first call
  const currentTrickBank = getCurrentTrickBank(trickBank);
  const correctTrick = getCorrectTrick(currentTrickBank, trick);
  const currentChoices = getCurrentChoices(correctTrick, choices);
  const taiProcess = spawn(TAI_BINARY_EXECUTABLE_FILEPATH, [...getArgs(), correctTrick.filepath]);

  // Creating this interface prevents the user from inputting early
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Write out the data
  taiProcess.stdout.on('data', writeTaiProcess(currentChoices)); // horrible, but this gets an extra parameter into the writeTaiProcess callback
  taiProcess.stderr.on('data', errorTaiProcess);

  // close stream, remove the prompt text and close rl interface
  taiProcess.on('close', async () => {
    removePromptText();
    rl.close();
    await guessGif(currentTrickBank, correctTrick, currentChoices);
  });
};

main();
