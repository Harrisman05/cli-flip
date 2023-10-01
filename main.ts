#!/usr/bin/env node

import { spawn } from 'child_process';
import inquirer from 'inquirer';
import chalk from 'chalk';

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
    startAscii();
};

const startAscii = (i = 3) => {
    // TODO convert to params
    const scriptPath = './rust-binaries/target/release/tai';
    const args = [
        '-c',
        '-d',
        '--scale',
        '1',
        '--sleep',
        '50',
        '-O',
        './assets/hardflip.gif'
    ];
    const taiProcess = spawn(scriptPath, args);

    // Listen for stdout data (ASCII art output)
    const onData = (data: string) => {
        process.stdout.write(data);
    };

    // Attach the event listener
    taiProcess.stdout.on('data', onData);

    taiProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    // close stream and replay or return to quiz
    taiProcess.on('close', (code) => {
        console.log(
            `Replays left ${i}. Child process exited with code ${code}`
        );
        if (i > 0) {
            startAscii(--i);
        } else {
            startQuiz();
        }
    });
};

main();
