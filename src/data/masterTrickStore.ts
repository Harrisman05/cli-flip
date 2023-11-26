import { MasterTrickStore } from '../model/MasterTrickStore';

const kickflipFolder = 'kickflips/';
const doubleKickflipFolder = 'doubleKickflips/';
const heelflipFolder = 'heelflips/';
const heelflipFrontsideBodyVarialFolder = 'heelflipFrontsideBodyVarials/';
const varialHeelflipFolder = 'varialHeelflips/';
const hardflipFolder = 'hardflips/';
const lateHardflipFolder = 'lateHardflips/';
const doubleHardflipFolder = 'doubleHardflips/';
const doubleDolphinFlipFolder = 'doubleDolphinFlips/';

const masterTrickStore: MasterTrickStore = {
  kickflips: {
    kickflip: {},
    switchKickflip: {
      name: 'Switch Kickflip',
      propName: 'switchKickflip',
      filepath: `${kickflipFolder}switch-kickflip.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    nollieKickflip: {},
    fakieKickflip: {
      name: 'Fakie Kickflip',
      propName: 'fakieKickflip',
      filepath: `${kickflipFolder}fakie-kickflip.gif`,
      skater: 'John Chyk',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    },
  },
  doubleKickflips: {
    doubleKickflip: {},
    switchDoubleKickflip: {},
    nollieDoubleKickflip: {
      name: 'Nollie Double Kickflip',
      propName: 'nollieDoubleKickflip',
      filepath: `${doubleKickflipFolder}nollie-double-kickflip.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    fakieDoubleKickflip: {},
  },
  heelflips: {
    heelflip: {
      name: 'Heelflip',
      propName: 'heelflip',
      filepath: `${heelflipFolder}heelflip.gif`,
      skater: 'TJ Rogers',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    },
    switchHeelflip: {
      name: 'Switch Heelflip',
      propName: 'switchHeelflip',
      filepath: `${heelflipFolder}switch-heelflip.gif`,
      skater: 'John Chyk',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=1bWni8NZ-gk',
    },
    nollieHeelflip: {},
    fakieHeelflip: {},
  },
  heelflipFrontsideBodyVarial: {
    heelflipFrontsideBodyVarial: {},
    switchHeelflipFrontsideBodyVarial: {
      name: 'Switch Heelflip Frontside Body Varial',
      propName: 'switchHeelflipFrontsideBodyVarial',
      filepath: `${heelflipFrontsideBodyVarialFolder}switch-heelflip-frontside-body-varial.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    nollieHeelflipFrontsideBodyVarial: {},
    fakieHeelflipFrontsideBodyVarial: {},
  },
  varialHeelflips: {
    varialHeelflip: {
      name: 'Varial Heelflip',
      propName: 'varialHeelflip',
      filepath: `${varialHeelflipFolder}varial-heelflip.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    switchVarialHeelflip: {},
    nollieVarialHeelflip: {},
    fakieVarialHeelflip: {},
  },
  hardflips: {
    hardflip: {
      name: 'Hardflip',
      propName: 'hardflip',
      filepath: `${hardflipFolder}hardflip.gif`,
      skater: 'Louie Lopez',
      stance: 'Goofy',
      src: 'https://www.youtube.com/watch?v=oxc0us0qolq',
    },
    switchHardflip: {},
    nollieHardflip: {},
    fakieHardflip: {},
  },
  lateHardflips: {
    lateHardflip: {},
    switchLateHardflip: {
      name: 'Switch Late Hardflip',
      propName: 'switchLateHardflip',
      filepath: `${lateHardflipFolder}switch-late-hardflip.gif`,
      skater: 'Jamie Griffin',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
    },
    nollieLateHardflip: {},
    fakieLateHardflip: {},
  },
  doubleHardflips: {
    doubleHardflip: {
      name: 'Double Hardflip',
      propName: 'doubleHardflip',
      filepath: `${doubleHardflipFolder}double-hardflip.gif`,
      skater: 'Jamie Griffin',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
    },
    switchDoubleHardflip: {},
    nollieDoubleHardflip: {},
    fakieDoubleHardflip: {},
  },
  doubleDolphinFlips: {
    lateDoubleDolphinFlip: {},
    switchDoubleDolphinFlip: {},
    nollieDoubleDolphinFlip: {},
    fakieDoubleDolphinFlip: {
      name: 'Fakie Double Dolphin Flip',
      propName: 'fakieDoubleDolphinFlip',
      filepath: `${doubleDolphinFlipFolder}fakie-double-dolphin-flip.gif`,
      skater: 'Jamie Griffin',
      stance: 'Regular',
      src: 'https://www.youtube.com/watch?v=tLET_hFcI7M',
    },
  },
};

export default masterTrickStore;
