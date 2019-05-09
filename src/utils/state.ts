import {FlaggedMap, MineMap, OpenedMap, UnixTimeStamp} from "../interfaces";

class State {
  timeStarted: UnixTimeStamp;
  mine: MineMap;
  open: OpenedMap;
  flag: FlaggedMap;
}

export const state = new State();

export default state;
