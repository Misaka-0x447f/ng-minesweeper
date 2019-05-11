import {FlaggedMap, MineMap, OpenedMap, UnixTimeStamp} from "../interfaces";
import {getEmptyMap} from "./map";

class State {
  timeStarted: UnixTimeStamp = undefined;
  mine: MineMap = getEmptyMap();
  open: OpenedMap = getEmptyMap();
  flag: FlaggedMap = getEmptyMap();
  view: "title" | "play" | "victory" | "failed" = "title";
}

export const state = new State();

export default state;
