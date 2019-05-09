import {FlaggedMap, MineMap, OpenedMap, UnixTimeStamp} from "../interfaces";
import {getEmptyMap} from "./map";

class State {
  timeStarted: UnixTimeStamp = NaN;
  mine: MineMap = getEmptyMap();
  open: OpenedMap = getEmptyMap();
  flag: FlaggedMap = getEmptyMap();
}

export const state = new State();

export default state;
