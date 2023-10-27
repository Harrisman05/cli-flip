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
  filepath: './assets/masterTrickStore/kickflips/fakie-kickflip.gif',
  name: 'Fakie Kickflip',
  propName: 'fakieKickflip',
  skater: 'John Chyk',
  src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
  stance: 'Regular',
};

export const MOCK_CHOICES = ['Double Hardflip', 'Switch Kickflip', 'Varial Heelflip', 'Fakie Double Dolphin Flip'];
