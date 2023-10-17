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
import { TrickBank } from './model/TrickBank';
import getCurrentTrickBank from './utils/getCurrentTrickBank';
import getCorrectTrick from './utils/getCorrectTrick';
import getCurrentChoices from './utils/getCurrentChoices';
import { score } from './model/Score';

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

const guessGif = async (currrentTrickBank: TrickBank, correctTrick: Trick, choices: string[]) => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'trick',
      message: 'Guess the trick! 🛹🤔',
      choices: [`${chalk.dim('REPLAY GIF')}`, ...choices],
    },
  ]);
  console.log(
    `✅ - ${score.correctAnswers} | ❌ - ${score.incorrectAnswers} | ${score.currentQuestion}/${score.totalQuestions}`,
  );

  if (answer.trick === `${chalk.dim('REPLAY GIF')}`) {
    process.stdout.write('\x1B[0J');
    startGif(currrentTrickBank, correctTrick, choices);
  } else if (answer.trick === correctTrick.name) {
    console.log('CORRECT');
    score.addCorrectAnswer();
    score.nextQuestion();
    delete currrentTrickBank[correctTrick.propName]; // delete the just answered trick name to remove it from next possible set of correct tricks, preventing question duplication
    process.stdout.write('\x1B[0J');
    startGif(currrentTrickBank);
  } else if (answer.trick !== correctTrick.name) {
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
