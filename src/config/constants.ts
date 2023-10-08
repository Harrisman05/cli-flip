export const TAI_BINARY_EXECUTABLE_FILEPATH =
    './rust-binaries/target/release/tai';

export enum TAI_SCRIPT_ARGUMENTS {
    dither = '-d',
    ditherScale = '-D',
    ditherValue = '255',
    scale = '--scale',
    scaleValue = '1',
    sleep = '--sleep',
    sleepValue = '65',
    once = '--once'
}
