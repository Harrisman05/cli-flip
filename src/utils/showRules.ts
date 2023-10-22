import sleep from './sleep';

const showRules = async (): Promise<void> => {
  console.log('see if we sleep...');
  await sleep(100);
  console.log('2nd one');
  await sleep(100);
  console.log('3rd one');
  await sleep(100);
  console.log('Leggo!');
  await sleep(100);
};

export default showRules;
