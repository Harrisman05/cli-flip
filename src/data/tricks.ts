import { Tricks } from '../model/Tricks';

const tricksBasePath = './assets/';

const tricks: Tricks = {
  hardflip: {
    name: 'Hardflip',
    filepath: `${tricksBasePath}hardflip.gif`
  },
  nollieDoubleKickflip: {
    name: 'Nollie Double Kickflip',
    filepath: `${tricksBasePath}nollie-double-kickflip-large.gif`
  },
  switchHeelflipBodyVarial: {
    name: 'Switch Heelflip Body Varial',
    filepath: `${tricksBasePath}switch-heel-body-varial.gif`
  },
  varialHeelflip: {
    name: 'Varial Heelflip',
    filepath: `${tricksBasePath}varial-heelflip.gif`
  }
  // kickflip: `${tricksBasePath}kickflip.gif`,
  // lateHardflip: `${tricksBasePath}jamie/late-hardflip.gif`,
  // fakieDoubleDolphinFlip: `${tricksBasePath}jamie/fakie-double-dolphin-flip.gif`,
  // doubleHardflip: `${tricksBasePath}jamie/double-hardflip.gif`,
  // doubleHeelflipSigma: `${tricksBasePath}jamie/double-heelflip-sigma.gif`
};

export default tricks;
