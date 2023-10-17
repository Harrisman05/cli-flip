import { TAI_SCRIPT_ARGUMENTS } from '../config/constants.js';

const getArgs = () => {
  return [
    TAI_SCRIPT_ARGUMENTS.dither,
    TAI_SCRIPT_ARGUMENTS.ditherScale,
    TAI_SCRIPT_ARGUMENTS.ditherValue,
    TAI_SCRIPT_ARGUMENTS.scale,
    TAI_SCRIPT_ARGUMENTS.scaleValue,
    TAI_SCRIPT_ARGUMENTS.sleep,
    TAI_SCRIPT_ARGUMENTS.sleepValue,
    TAI_SCRIPT_ARGUMENTS.once,
  ];
};

export default getArgs;
