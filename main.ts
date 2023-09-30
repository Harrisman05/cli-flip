#!/usr/bin/env node

import { spawn } from 'child_process'

const scriptPath = './rust-binaries/target/release/tai';
const args = ['-c', '-d', '--scale', '1', '--sleep', '50', './assets/switch-heel-body-varial.gif'];
const taiProcess = spawn(scriptPath, args);

// Listen for stdout data (ASCII art output)
const onData = (data: any) => {
    process.stdout.write(data);
};

// Attach the event listener
taiProcess.stdout.on('data', onData);

setTimeout(() => {
    taiProcess.stdout.off('data', onData);
    console.log('Stopped listening for data.');
    // Ensure the process is killed on script exit
    taiProcess.kill('SIGINT');
}, 30000);  

taiProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

taiProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});




