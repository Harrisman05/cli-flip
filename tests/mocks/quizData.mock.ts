import chalk from 'chalk';
import { Trick } from '../../src/model/Trick';
import { Tricks } from '../../src/model/Tricks';

export const MOCK_EMPTY_QUIZ_TRICKS = {} as Tricks;
export const MOCK_EMPTY_TRICK = {} as Trick;
export const MOCK_EMPTY_CHOICES = [] as string[];

export const MOCK_QUIZ_TRICKS: Tricks = {
  doubleHardflip: {
    filepath: './assets/masterTrickStore/doubleHardflips/double-hardflip.gif',
    name: 'Double Hardflip',
    propName: 'doubleHardflip',
    skater: 'Jamie Griffin',
    src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
    stance: 'Regular',
  },
  fakieKickflip: {
    filepath: './assets/masterTrickStore/kickflips/fakie-kickflip.gif',
    name: 'Fakie Kickflip',
    propName: 'fakieKickflip',
    skater: 'John Chyk',
    src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    stance: 'Regular',
  },
  hardflip: {
    filepath: './assets/masterTrickStore/hardflips/hardflip.gif',
    name: 'Hardflip',
    propName: 'hardflip',
    skater: 'Louie Lopez',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    stance: 'Goofy',
  },
  heelflip: {
    filepath: './assets/masterTrickStore/heelflips/heelflip.gif',
    name: 'Heelflip',
    propName: 'heelflip',
    skater: 'TJ Rogers',
    src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    stance: 'Regular',
  },
};

export const MOCK_TRICK: Trick = {
  filepath: './assets/masterTrickStore/hardflips/hardflip.gif',
  name: 'Hardflip',
  propName: 'hardflip',
  skater: 'Louie Lopez',
  src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  stance: 'Goofy',
};

export const MOCK_CORRECT_TRICK_AS_FAKIE_KICKFLIP: Trick = {
  filepath: './assets/masterTrickStore/kickflips/fakie-kickflip.gif',
  name: 'Fakie Kickflip',
  propName: 'fakieKickflip',
  skater: 'John Chyk',
  src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  stance: 'Regular',
};

export const MOCK_RANDOM_TRICK_AS_HEELFLIP: Trick = {
  filepath: './assets/masterTrickStore/heelflips/heelflip.gif',
  name: 'Heelflip',
  propName: 'heelflip',
  skater: 'TJ Rogers',
  src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  stance: 'Regular',
};

export const MOCK_CHOICES = ['Hardflip', 'Switch Kickflip', 'Varial Heelflip', 'Fakie Double Dolphin Flip'];

export const MOCK_TRICKBANK: Tricks = {
  switchKickflip: {
    name: 'Switch Kickflip',
    propName: 'switchKickflip',
    filepath: './assets/masterTrickStore/kickflips/switch-kickflip.gif',
    skater: 'Louie Lopez',
    stance: 'Goofy',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  },
  fakieKickflip: {
    name: 'Fakie Kickflip',
    propName: 'fakieKickflip',
    filepath: './assets/masterTrickStore/kickflips/fakie-kickflip.gif',
    skater: 'John Chyk',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  },
  nollieDoubleKickflip: {
    name: 'Nollie Double Kickflip',
    propName: 'nollieDoubleKickflip',
    filepath: './assets/masterTrickStore/doubleKickflips/nollie-double-kickflip.gif',
    skater: 'Louie Lopez',
    stance: 'Goofy',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  },
  heelflip: {
    name: 'Heelflip',
    propName: 'heelflip',
    filepath: './assets/masterTrickStore/heelflips/heelflip.gif',
    skater: 'TJ Rogers',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  },
  switchHeelflip: {
    name: 'Switch Heelflip',
    propName: 'switchHeelflip',
    filepath: './assets/masterTrickStore/heelflips/switch-heelflip.gif',
    skater: 'John Chyk',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  },
  switchHeelflipFrontsideBodyVarial: {
    name: 'Switch Heelflip Frontside Body Varial',
    propName: 'switchHeelflipFrontsideBodyVarial',
    filepath: './assets/masterTrickStore/heelflipFrontsideBodyVarials/switch-heelflip-frontside-body-varial.gif',
    skater: 'Louie Lopez',
    stance: 'Goofy',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  },
  varialHeelflip: {
    name: 'Varial Heelflip',
    propName: 'varialHeelflip',
    filepath: './assets/masterTrickStore/varialHeelflips/varial-heelflip.gif',
    skater: 'Louie Lopez',
    stance: 'Goofy',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  },
  hardflip: {
    name: 'Hardflip',
    propName: 'hardflip',
    filepath: './assets/masterTrickStore/hardflips/hardflip.gif',
    skater: 'Louie Lopez',
    stance: 'Goofy',
    src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
  },
  switchLateHardflip: {
    name: 'Switch Late Hardflip',
    propName: 'switchLateHardflip',
    filepath: './assets/masterTrickStore/lateHardflips/switch-late-hardflip.gif',
    skater: 'Jamie Griffin',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
  },
  doubleHardflip: {
    name: 'Double Hardflip',
    propName: 'doubleHardflip',
    filepath: './assets/masterTrickStore/doubleHardflips/double-hardflip.gif',
    skater: 'Jamie Griffin',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
  },
  fakieDoubleDolphinFlip: {
    name: 'Fakie Double Dolphin Flip',
    propName: 'fakieDoubleDolphinFlip',
    filepath: './assets/masterTrickStore/doubleDolphinFlips/fakie-double-dolphin-flip.gif',
    skater: 'Jamie Griffin',
    stance: 'Regular',
    src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
  },
};

export const MOCK_REPLAY_GIF_CHOICE = { choice: `${chalk.dim('REPLAY GIF')}` };

export const MOCK_CORRECT_CHOICE_ANSWER = { choice: `${chalk.yellow(MOCK_TRICK.name)}` };

export const MOCK_WRONG_CHOICE_ANSWER = { choice: `${chalk.yellow(MOCK_CHOICES[3])}` };
