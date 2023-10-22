import { Tricks } from './Tricks';

export interface MasterTrickStore {
  [key: string]: Tricks | {}; // tricks with no props are typed {}
}
