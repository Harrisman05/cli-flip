import { TrickBank } from '../model/TrickBank.js';

const tricksBasePath = './assets/';

const masterTrickBank: TrickBank = {
  hardflip: {
    name: 'Hardflip',
    propName: 'hardflip',
    filepath: `${tricksBasePath}hardflip.gif`,
  },
  nollieDoubleKickflip: {
    name: 'Nollie Double Kickflip',
    propName: 'nollieDoubleKickflip',
    filepath: `${tricksBasePath}nollie-double-kickflip-large.gif`,
  },
  switchHeelflipBodyVarial: {
    name: 'Switch Heelflip Body Varial',
    propName: 'switchHeelflipBodyVarial',
    filepath: `${tricksBasePath}switch-heel-body-varial.gif`,
  },
  varialHeelflip: {
    name: 'Varial Heelflip',
    propName: 'varialHeelflip',
    filepath: `${tricksBasePath}varial-heelflip.gif`,
  },
  kickflip: {
    name: 'Kickflip',
    propName: 'kickflip',
    filepath: `${tricksBasePath}kickflip.gif`,
  },
  lateHardflip: {
    name: 'Late Hardflip',
    propName: 'lateHardflip',
    filepath: `${tricksBasePath}jamie/late-hardflip.gif`,
  },
  fakieDoubleDolphinFlip: {
    name: 'Fakie Double Dolphin Flip',
    propName: 'fakieDoubleDolphinFlip',
    filepath: `${tricksBasePath}jamie/fakie-double-dolphin-flip.gif`,
  },
  doubleHardflip: {
    name: 'Double Hardflip',
    propName: 'doubleHardflip',
    filepath: `${tricksBasePath}jamie/double-hardflip.gif`,
  },
  doubleHeelflipSigma: {
    name: 'Double Heelflip Sigma',
    propName: 'doubleHeelflipSigma',
    filepath: `${tricksBasePath}jamie/double-heelflip-sigma.gif`,
  },
  fakieKickflip: {
    name: 'Fakie Kickflip',
    propName: 'fakieKickflip',
    filepath: `${tricksBasePath}fakieKickflip.gif`,
  },
};

export default masterTrickBank;
