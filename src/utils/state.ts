import {FlaggedMap, MineMap, OpenedMap, UnixTimeStamp} from "../interfaces";
import {getEmptyMap} from "./map";

class State {
  timeStarted: UnixTimeStamp = undefined;
  mine: MineMap = getEmptyMap();
  open: OpenedMap = getEmptyMap();
  flag: FlaggedMap = getEmptyMap();
  gameStarted = false;
  init = false;
}

export const state = new State();

export default state;
