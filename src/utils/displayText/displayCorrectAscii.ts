import chalk from 'chalk';

const displayCorrectAscii = (): void => {
  console.log(
    chalk.green(`
   ____                         _   
  / ___|___  _ __ _ __ ___  ___| |_ 
 | |   / _ \\| '__| '__/ _ \\/ __| __|
 | |__| (_) | |  | | |  __/ (__| |_ 
  \\____\\___/|_|  |_|  \\___|/\\___|\\_|

  `),
  );
};

export default displayCorrectAscii;
