import chalk from 'chalk';

const displayWrongAscii = (): void => {
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
};

export default displayWrongAscii;
